import { defineField, defineType } from 'sanity';

const faqs = defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'object',
  fields: [
    defineField({
      name: 'sections',
      title: 'FAQ Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqSection',
          title: 'FAQ Section',
          fields: [
            defineField({
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'faqItem',
                  title: 'FAQ Item',
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
        },
      ],
    }),
  ],
});

export default faqs;
