import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Add Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
});
