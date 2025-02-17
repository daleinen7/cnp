// create a page using the other schema blocks
import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
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
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
    }),
    defineField({
      name: 'components',
      type: 'array',
      title: 'Block Content',
      of: [
        { type: 'basicContent' },
        { type: 'faqs' },
        { type: 'headline' },
        { type: 'hero' },
        { type: 'sideBySide' },
        { type: 'spacer' },
      ],
    }),
  ],
});
