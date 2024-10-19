import { defineField, defineType } from 'sanity';

export const portraitCards = defineType({
  name: 'portraitCards',
  title: 'Portrait Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'portraitCardList',
      title: 'Portrait Card List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'portraitCard',
          title: 'portrait Card',
          fields: [
            defineField({
              name: 'headline',
              title: 'Headline',
              type: 'string',
            }),
            defineField({
              name: 'subheadline',
              title: 'Subheadline',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'portraitLink',
              title: 'portrait Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});
