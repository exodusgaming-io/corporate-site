import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineField, defineType} from 'sanity'
import {bodyField, excerptField, imageField, publishedAtField, seoField, slugField} from './fields'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  icon: DocumentTextIcon,
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
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
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
    select: {title: 'title', author: 'author.name', date: 'publishedAt', media: 'mainImage'},
    prepare({title, author, date, media}) {
      const day = typeof date === 'string' ? date.slice(0, 10) : undefined
      return {title, subtitle: [day, author].filter(Boolean).join(' · '), media}
    },
  },
})
