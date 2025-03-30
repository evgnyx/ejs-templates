import { join } from 'path';
import { paths } from './configuration';
import { createDir, createFile, exists, readDir, removePath } from './helpers';
import { templates } from './templates';
import { renderTemplate } from './ejs';

if (!exists(paths.dist)) {
  createDir(paths.dist);
} else {
  const contents = readDir(paths.dist);
  contents.forEach((entry) => {
    removePath(join(paths.dist, entry));
  })
}

templates.forEach(async (template) => {
  if (template.path !== paths.dist) {
    createDir(template.path);
  }
  const html = await renderTemplate(template);
  createFile(join(template.path, template.filename), html);
});
