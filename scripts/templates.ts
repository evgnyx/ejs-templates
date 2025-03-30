import { join } from 'path';
import { TemplateConfigParams } from './types';
import { ext, paths } from './configuration';
import { getStats, readDir, readJSON } from './helpers';

const mapTemplate = (name: string): TemplateConfigParams => {
  const currentPath = join(paths.templates, name);
  const route = name.replace(ext.ejs, '');

  const result: TemplateConfigParams = {
    route: `/${route}`,
    source: currentPath,
    filename: route + ext.html,
    path: paths.dist,
    layout: paths.defaultLayout,
    styles: paths.defaultStyles,
  };

  if (getStats(currentPath).isDirectory()) {
    result.source = join(currentPath, paths.template);
    const templateFiles = readDir(currentPath);
    templateFiles.forEach((templateFilename) => {
      if (RegExp(paths.config).test(templateFilename)) {
        const { path, layout, styles, filename } = readJSON<TemplateConfigParams>(join(currentPath, templateFilename));
        if (path) result.path = join(result.path, path);
        if (layout === null) result.layout = null;
        if (styles === null) result.styles = null;
        if (filename) result.filename = filename;
      }
      if (result.layout !== null && RegExp(paths.layout).test(templateFilename)) {
        result.layout = join(currentPath, paths.layout);
      }
      if (result.styles !== null && RegExp(paths.styles).test(templateFilename)) {
        result.styles = join(currentPath, paths.styles);
      }
    });
  }

  return result;
}

const templatesList = readDir(paths.templates);
export const templates = templatesList.map(mapTemplate);
