import {defineField, defineType} from 'sanity'
import {imageField} from './fields'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description:
    'Overrides for search engines and link previews. Empty fields fall back to the page title and excerpt.',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
      validation: (rule) =>
        rule.max(60).warning('Search engines cut titles after about 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Search engines cut descriptions after about 160 characters'),
    }),
    imageField('image', 'Share image'),
    defineField({
      name: 'noindex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
