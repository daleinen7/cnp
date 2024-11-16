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
      of: [{ type: 'navItem' }],
    },
  ],
};
