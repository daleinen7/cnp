import { defineField, defineType } from 'sanity';

export const sideBySide = defineType({
  name: 'sideBySide',
  title: 'Side By Side',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
