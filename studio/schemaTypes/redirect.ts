import {ArrowRightIcon} from '@sanity/icons/ArrowRight'
import {defineField, defineType, getPublishedId} from 'sanity'

// Keep in step with scripts/write-redirects.mts, which turns these documents into pages at build.
// The build alone can tell whether a page already exists at `from`; it skips the redirect then.
const PATH = /^\/(?!\/)[^\s?#\\]*$/

// Path without query, hash, index.html or trailing slash: /a/ = /a = /a/index.html = /a?x#y.
function normalize(path: string) {
  const bare = path.split(/[?#]/)[0].replace(/\/index\.html?$/i, '/')
  return bare.length > 1 ? bare.replace(/\/+$/, '') : bare
}

function unusableSegment(path: string) {
  const segments = path.split('/').filter(Boolean)
  return segments[0] === '_next' || segments.some((s) => s === '.' || s === '..')
}

const ADDRESS_HINT = 'Use a path starting with / or an http(s) address'

export const redirect = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  icon: ArrowRightIcon,
  fields: [
    defineField({
      name: 'from',
      title: 'From',
      type: 'string',
      description:
        'Old path on this site, e.g. /old-page. If a page exists at this path, the page wins and the redirect is skipped.',
      validation: (rule) =>
        rule.required().custom(async (from, context) => {
          if (!from) return true
          if (!PATH.test(from)) return 'Start with / and leave out spaces, \\, ? and #'
          if (normalize(from) === '/') return 'The home page cannot be redirected'
          if (unusableSegment(from))
            return 'Paths under /_next/ or with . or .. cannot be redirected'
          const id = getPublishedId(context.document?._id ?? '')
          const client = context.getClient({apiVersion: '2026-11-20'})
          const taken = await client.fetch<number>(
            `count(*[_type == "redirect" && !(_id in [$id, $draft]) && !(_id in path("versions.**"))
              && from in [$from, $bare, $bare + "/", $bare + "/index.html", $bare + "/index.htm"]])`,
            {id, draft: `drafts.${id}`, from, bare: normalize(from)},
          )
          return taken > 0 ? 'Another redirect already starts from this path' : true
        }),
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'string',
      description: 'A path on this site (/new-page) or a full address (https://…).',
      validation: (rule) =>
        rule.required().custom((to, context) => {
          if (!to) return true
          if (PATH.test(to.split(/[?#]/)[0])) {
            const from = (context.document as {from?: string} | undefined)?.from
            return from && normalize(from) === normalize(to) ? 'Points to the same page' : true
          }
          try {
            const url = new URL(to)
            return url.protocol === 'https:' || url.protocol === 'http:' ? true : ADDRESS_HINT
          } catch {
            return ADDRESS_HINT
          }
        }),
    }),
  ],
  preview: {
    select: {title: 'from', subtitle: 'to'},
    prepare: ({title, subtitle}) => ({title, subtitle: subtitle ? `→ ${subtitle}` : undefined}),
  },
  orderings: [{title: 'From', name: 'fromAsc', by: [{field: 'from', direction: 'asc'}]}],
})
