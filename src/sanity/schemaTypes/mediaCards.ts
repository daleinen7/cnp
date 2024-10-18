import { defineField, defineType } from 'sanity';

export const mediaCards = defineType({
  name: 'mediaCards',
  title: 'Media Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaCardList',
      title: 'Media Card List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'mediaCard',
          title: 'Media Card',
          fields: [
            defineField({
              name: 'media',
              title: 'Media',
              type: 'image',
            }),
            defineField({
              name: 'headline',
              title: 'Headline',
              type: 'string',
            }),
            defineField({
              name: 'subheadline',
              title: 'Subheadline',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'mediaLink',
              title: 'media Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});
