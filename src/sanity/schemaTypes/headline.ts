import { defineField, defineType } from 'sanity';

export const headline = defineType({
  name: 'headline',
  title: 'Headline',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
  ],
});
