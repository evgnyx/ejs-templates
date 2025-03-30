import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import postcssFunctions from 'postcss-functions';
import postcssImport from 'postcss-import';
import { NonNull, TemplateConfigParams } from './types';
import { readFile } from './helpers';
import * as functions from '../src/utils';

export const getStyles = async (template: TemplateConfigParams) => {
  const { styles } = template as NonNull<TemplateConfigParams>;

  const css = readFile(styles);

  const result = await postcss([
    postcssNested,
    autoprefixer,
  ])
    .use(postcssImport())
    .use(postcssFunctions({ functions }))
    .process(css, { from: styles });

  result.warnings().forEach((warning) => {
    console.warn('[STYLES RENDER]', warning.toString());
  });

  return `<style type="text/css">${result.css}</style>`;
};
