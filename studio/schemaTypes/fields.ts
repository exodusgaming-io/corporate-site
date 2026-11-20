import {defineArrayMember, defineField} from 'sanity'

// Alt text, required as soon as an image is chosen.
export const altField = defineField({
  name: 'alt',
  title: 'Alt text',
  type: 'string',
  description: 'What the image shows, for screen readers and search engines.',
  validation: (rule) =>
    rule.custom((alt, context) => {
      const hasAsset = Boolean((context.parent as {asset?: unknown} | undefined)?.asset)
      return hasAsset && !alt ? 'Alt text is required' : true
    }),
})

export function imageField(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    fields: [altField],
  })
}

export const slugField = defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {source: 'title', maxLength: 96},
  validation: (rule) => rule.required(),
})

export const publishedAtField = defineField({
  name: 'publishedAt',
  title: 'Published at',
  type: 'datetime',
  initialValue: () => new Date().toISOString(),
  validation: (rule) => rule.required(),
})

export const excerptField = defineField({
  name: 'excerpt',
  title: 'Excerpt',
  type: 'text',
  rows: 3,
  description: 'Shown in lists and as the fallback search description.',
  validation: (rule) => rule.max(200).warning('Keep it under 200 characters'),
})

export const bodyField = defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({type: 'block'}),
    defineArrayMember({type: 'image', options: {hotspot: true}, fields: [altField]}),
  ],
})

export const seoField = defineField({
  name: 'seo',
  title: 'SEO',
  type: 'seo',
  options: {collapsible: true, collapsed: true},
})
