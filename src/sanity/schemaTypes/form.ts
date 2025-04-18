import { defineField, defineType } from 'sanity';

export const form = defineType({
  name: 'form',
  title: 'Contact Form',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
});
