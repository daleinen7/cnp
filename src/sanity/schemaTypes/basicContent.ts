import { defineField, defineType } from 'sanity';

export const basicContent = defineType({
  name: 'basicContent',
  title: 'Basic Content',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
});
