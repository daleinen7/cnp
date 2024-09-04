// create a page using the other schema blocks

import { defineField, defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'components',
      type: 'array',
      title: 'Block Content',
      of: [
        { type: 'headline' },
        { type: 'sideBySide' },
        { type: 'hero' },
        { type: 'basicContent' },
        { type: 'faq' },
      ],
    }),
  ],
});
