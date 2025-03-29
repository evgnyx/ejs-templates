import { join } from 'path';
import { ext, paths } from './configuration';
import { TemplateConfigParams } from './types';
import { getStats, readDir, readJSON } from './helpers';

const mapTemplate = (name: string): TemplateConfigParams => {
  const currentPath = join(paths.templates, name);
  const route = name.replace(ext.ejs, '');

  const result: TemplateConfigParams = {
    source: currentPath,
    layout: paths.defaultLayout,
    filename: route + ext.html,
    path: paths.dist,
    route: `/${route}`,
  };

  if (getStats(currentPath).isDirectory()) {
    result.source = join(currentPath, paths.template);
    const templateFiles = readDir(currentPath);
    templateFiles.forEach((filename) => {
      if (RegExp(paths.config).test(filename)) {
        const { path, layout } = readJSON<TemplateConfigParams>(join(currentPath, filename));
        if (path) result.path = join(result.path, path);
        if (layout === null) result.layout = null;
      }
      if (result.layout !== null && RegExp(paths.layout).test(filename)) {
        result.layout = join(currentPath, paths.layout);
      }
    });
  }

  return result;
}

const templatesList = readDir(paths.templates);
export const templates = templatesList.map(mapTemplate);
