import ejs from 'ejs';
import { minify } from 'html-minifier';
import { TemplateConfigParams } from './types';
import { readFile } from './helpers';
import { partial, paths } from './configuration';
import * as commonJS from '../src/utils';

export const renderTemplate = (
  template: TemplateConfigParams,
  data?: Record<string, unknown>,
) => {
  let html = readFile(template.source);
  if (template.layout) {
    html = readFile(template.layout).replace(partial.body, html);
  }

  html = ejs.render(html, {
    ...commonJS,
    ...data,
  }, {
    views: [paths.partials],
    rmWhitespace: true,
  });

  html = minify(html, {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    keepClosingSlash: true,
  });

  return html;
}
