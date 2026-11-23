import {defineField, defineType} from 'sanity'
import {imageField} from './fields'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    imageField('image', 'Photo'),
    defineField({name: 'bio', title: 'Bio', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'image'},
  },
})
