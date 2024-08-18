import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  projectId: 'l76ymjg8',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schema,
  },
});
