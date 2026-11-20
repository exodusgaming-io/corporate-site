import {BulbOutlineIcon} from '@sanity/icons/BulbOutline'
import {defineField, defineType} from 'sanity'
import {bodyField, excerptField, imageField, publishedAtField, seoField, slugField} from './fields'

export const newsItem = defineType({
  name: 'newsItem',
  title: 'News item',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    slugField,
    excerptField,
    publishedAtField,
    imageField('mainImage', 'Main image'),
    bodyField,
    seoField,
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', date: 'publishedAt', media: 'mainImage'},
    prepare({title, date, media}) {
      return {title, subtitle: typeof date === 'string' ? date.slice(0, 10) : undefined, media}
    },
  },
})
