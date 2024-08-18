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
    // defineField({
    //   name: 'content',
    //   title: 'Content',
    //   type: 'blockContent',
    // }),
    defineField({
      name: 'components',
      type: 'array',
      title: 'Block Content',
      of: [
        // { type: 'blockContent' },
        { type: 'headline' },
        { type: 'sideBySide' },
      ],
    }),
  ],
});
