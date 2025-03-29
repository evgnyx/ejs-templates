import { templates } from './templates';
import { renderTemplate } from './ejs';

templates.forEach((template) => {
  const html = renderTemplate(template);
  console.log(html)
});
