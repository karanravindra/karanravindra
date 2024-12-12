// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';
import { remarkModifiedTime } from './remark-modified-time.mjs';
import { remarkReadingTime } from './remark-reading-time.mjs';



// https://astro.build/config
export default defineConfig({
  site: 'https://karanravindra.com',
  integrations: [icon(), alpinejs(), mdx(), sitemap(), tailwind({applyBaseStyles: false})],
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
  prefetch: {
    prefetchAll: true
  }
});