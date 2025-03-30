import express, { Request, Response } from 'express';
import { templates, syncServer, configuration, renderTemplate, TemplateConfigParams } from '../scripts';

const getMiddleware = (template: TemplateConfigParams) => {
  return async (_: Request, res: Response) => {
    const html = await renderTemplate(
      template,
      { ...configuration.dev.env, templates }
    );
    res.send(html);
  };
};

const app = express();

app.get('/', getMiddleware(configuration.dev.template));

templates.forEach((template) => {
  app.get(template.route, getMiddleware(template));
});

app.listen(configuration.dev.port, (error) => {
  if (error) {
    console.error(error);
  } else {
    syncServer();
  }
});
