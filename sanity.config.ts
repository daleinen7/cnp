import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  projectId: 'l76ymjg8',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schema,
  },
});
