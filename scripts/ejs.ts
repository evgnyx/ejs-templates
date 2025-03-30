import ejs from 'ejs';
import { TemplateConfigParams } from './types';
import { partial, paths } from './configuration';
import { readFile } from './helpers';
import { minify } from './minify';
import { getStyles } from './styles';
import * as utils from '../src/utils';

export const renderTemplate = async (
  template: TemplateConfigParams,
  data?: Record<string, unknown>,
) => {
  let html = readFile(template.source);

  if (template.layout) {
    html = readFile(template.layout).replace(partial.body, html);
  }

  if (template.styles) {
    const css = await getStyles(template);
    html = html.replace(partial.styles, css);
  }

  html = ejs.render(html, {
    ...utils,
    ...data,
  }, {
    views: [paths.partials],
    rmWhitespace: true,
  });

  html = minify(html);

  return html;
};
