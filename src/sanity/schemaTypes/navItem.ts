// nav item schema

export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'href',
      title: 'href',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'gray', value: 'gray' },
          { title: 'light-purple', value: 'light-purple' },
          { title: 'purple', value: 'purple' },
          { title: 'mid-purple', value: 'mid-purple' },
          { title: 'dark-purple', value: 'dark-purple' },
        ],
      },
    },
  ],
};
