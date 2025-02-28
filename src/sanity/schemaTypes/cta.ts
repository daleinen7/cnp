import { defineField, defineType } from 'sanity';

export const cta = defineType({
  name: 'cta',
  title: 'CTA',

  type: 'object',
  fields: [
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string'
    }),
    defineField({
      name: 'ctaBirdsBg',
      title: 'CTA Background with Birds',
      type: 'boolean',
    })
  ],
});
