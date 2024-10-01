import { defineField, defineType } from 'sanity';

export const spacer = defineType({
  name: 'spacer',
  title: 'Spacer',
  type: 'object',
  fields: [
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: '3rem' },
          { title: 'Medium', value: '5rem' },
          { title: 'Large', value: '8rem' },
        ],
        layout: 'radio',
      },
    }),
  ],
});
