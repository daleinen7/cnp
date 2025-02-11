import { defineField, defineType } from 'sanity';

export const complaintForm = defineType({
  name: 'complaintForm',
  title: 'Complaint Form',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
});
