import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'exam',
  title: 'Add Exam',
  type: 'document',
  fields: [
    defineField({
      name: 'examname',
      title: 'Exam Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'examname', // Generate slug from 'examname' field
        maxLength: 200, // Optional: Limit the slug length
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'), // Replace spaces with dashes
      },
    }),
    defineField({
      name: 'branch',
      title: 'Branch',
      type: 'reference',
      to: [{ type: 'branch' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }], // Reference to Subject schema
    }),
  ],
});
