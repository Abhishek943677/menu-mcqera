import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'branch',
  title: 'Add Branch',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subject' }] }], // Reference to Subject schema
    }),
  ],
  preview: {
    select: {
      title: 'title', 
    },
    prepare(selection) {
      const { title } = selection; // Destructure title
      return {
        title, // Use title for preview
      };
    },
  },
});
