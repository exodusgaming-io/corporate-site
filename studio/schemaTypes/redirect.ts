import {ArrowRightIcon} from '@sanity/icons/ArrowRight'
import {defineField, defineType} from 'sanity'

// Same rules as scripts/write-redirects.ts, which turns these documents into pages at build.
const PATH = /^\/(?!\/)[^\s?#]*$/

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

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
          if (!PATH.test(from)) return 'Start with / and leave out spaces, ? and #'
          if (normalize(from) === '/') return 'The home page cannot be redirected'
          const id = (context.document?._id ?? '').replace(/^drafts\./, '')
          const client = context.getClient({apiVersion: '2026-11-20'})
          const taken = await client.fetch<number>(
            'count(*[_type == "redirect" && !(_id in [$id, $draft]) && from in [$from, $from + "/", $bare]])',
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
          const from = (context.document as {from?: string} | undefined)?.from
          if (from && normalize(from) === normalize(to)) return 'Points to itself'
          if (PATH.test(to.split(/[?#]/)[0])) return true
          try {
            const url = new URL(to)
            return url.protocol === 'https:' || url.protocol === 'http:'
              ? true
              : 'Use a path starting with / or an http(s) address'
          } catch {
            return 'Use a path starting with / or an http(s) address'
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
