import { defineField, defineType } from 'sanity';

export const sideBySide = defineType({
  name: 'sideBySide',
  title: 'Side By Side',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
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
    defineField({
      name: 'imageLeft',
      title: 'Image Left',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'figureCaption',
      title: 'Figure Caption',
      type: 'string',
    }),
  ],
});
