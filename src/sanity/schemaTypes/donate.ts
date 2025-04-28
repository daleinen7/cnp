import { defineField, defineType } from 'sanity';

export const donate = defineType({
  name: 'donate',
  title: 'Donate Form',
  type: 'object',
  fields: [
    defineField({
      name: 'donationForm',
      title: 'Donation Form',
      type: 'string',
      description:
        'This block will display the PayPal donation form on the page.',
      readOnly: true,
      initialValue:
        'This block will display the PayPal donation form on the page.',
    }),
  ],
});
