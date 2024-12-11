// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://karanravindra.com',
  integrations: [icon(), alpinejs(), mdx(), sitemap(), tailwind({applyBaseStyles: false})]
});