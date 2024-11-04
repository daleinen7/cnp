import { defineField, defineType } from 'sanity';

// blog list schema
export const blogList = defineType({
  name: 'blogList',
  title: 'Blog List',
  type: 'object',
  fields: [
    // defineField({
    //   type: 'boolean',
    //   name: 'autoFill',
    //   title: 'Auto Fill',
    //   initialValue: false,
    //   description:
    //     'Automatically fill the blog list with the latest blogs',
    // }),
    defineField({
      name: 'blogList',
      title: 'Blog List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }],
    }),
  ],
});
