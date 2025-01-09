export default {
  name: 'spreadSheet',
  title: 'Spreadsheet',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'file',
      title: 'XLS File',
      type: 'file',
      options: {
        accept: '.xls, .xlsx',
      },
    },
  ],
};
