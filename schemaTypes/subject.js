import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subject',
  title: 'Add Subject',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
