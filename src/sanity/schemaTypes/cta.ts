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
      name: 'linkText',
      title: 'Link Text',
      type: 'string'
    }),
    defineField({
      name: 'ctaImages',
      title: 'CTA Background Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ctaImage',
          title: 'CTA Image',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            })
          ]
        }
      ]
    })
  ],
});
