import { defineField, defineType } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
  ],
});
