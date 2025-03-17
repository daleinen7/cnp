import { defineField, defineType } from 'sanity';

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
