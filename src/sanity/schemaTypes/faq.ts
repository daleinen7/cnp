import { defineField, defineType } from 'sanity';

export const faqs = defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'object',
  fields: [
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'object',
      fields: [
        defineField({
          name: 'faq',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'blockContent',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
