// nav schema
export default {
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      description:
        'pre-append a "/" to the slug if the link is internal; e.g. "/about" otherwise use the full https://www.example.com link to go to an external page',
      of: [{ type: 'navItem' }],
    },
  ],
};
