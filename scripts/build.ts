import { templates } from './templates';
import { renderTemplate } from './ejs';

templates.forEach(async (template) => {
  const html = await renderTemplate(template);
  console.log(html)
});
