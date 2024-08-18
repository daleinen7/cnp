import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'l76ymjg8',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      apiVersion: '2024-07-24', // insert the current date to access the latest version of the API
      studioBasePath: '/studio',
    }),
    ,
    react(),
  ],
});
