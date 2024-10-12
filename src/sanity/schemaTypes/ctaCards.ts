import { defineField, defineType } from 'sanity';

export const ctaCards = defineType({
  name: 'ctaCards',
  title: 'CTA Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'ctaCardList',
      title: 'Cta Card List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ctaCard',
          title: 'CTA Card',
          fields: [
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
          ],
        },
      ],
    }),
  ],
});
