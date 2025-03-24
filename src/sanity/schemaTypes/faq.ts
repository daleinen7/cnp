import { defineField, defineType } from 'sanity';

const faqs = defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'object',
  fields: [
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'sectionTitle',
          title: 'Section Title',
        },
        {
          type: 'array',
          name: 'column',
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
        },
      ],
    }),
  ],
});

export default faqs;
