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
        { type: 'basicContent' },
        { type: 'ctaCards' },
        { type: 'faqs' },
        { type: 'headline' },
        { type: 'hero' },
        { type: 'sideBySide' },
        { type: 'spacer' },
      ],
    }),
  ],
});
