import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { TemplateConfigParams } from './types';

const root = dirname(join(fileURLToPath(import.meta.url), '..'));

export const ext = {
  ejs: '.ejs',
  html: '.html',
};

export const partial = {
  body: '<!-- BODY -->',
  styles: '<!-- STYLES -->',
};

export const paths = {
  root,
  template: `index.ejs`,
  layout: 'layout.ejs',
  styles: 'index.css',
  config: 'config.json',
  dist: join(root, 'dist'),
  templates: join(root, 'src/templates'),
  partials: join(root, 'src/partials'),
  defaultLayout: join(root, 'src/layout/index.ejs'),
  defaultStyles: join(root, 'src/styles/index.css'),
}

export const configuration = {
  dev: {
    port: 3009,
    env: { isDev: true },
    template: {
      source: join(root, 'server', paths.template),
      layout: paths.defaultLayout,
      styles: paths.defaultStyles,
    } as TemplateConfigParams
  },
};
