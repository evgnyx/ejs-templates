import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { TemplateConfigParams } from './types';

const root = dirname(join(fileURLToPath(import.meta.url), '..'));

export const ext = {
  ejs: '.ejs',
  html: '.html',
};

export const partial = {
  body: '<%= BODY %>',
};

export const paths = {
  root,
  template: `index.ejs`,
  layout: 'layout.ejs',
  config: 'config.json',
  dist: join(root, 'dist'),
  defaultLayout: join(root, 'src/layout/index.ejs'),
  templates: join(root, 'src/templates'),
  partials: join(root, 'src/partials'),
  utils: join(root, 'src/utils'),
}

export const configuration = {
  dev: {
    port: 3009,
    env: { isDev: true },
    template: {
      source: join(root, 'server', paths.template),
      layout: paths.defaultLayout,
    } as TemplateConfigParams
  },
};
