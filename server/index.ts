import express, { Response } from 'express';
import { templates, syncServer, configuration, renderTemplate } from '../scripts';

const app = express();

app.get('/', async (_, res: Response) => {
  const html = await renderTemplate(
    configuration.dev.template,
    { ...configuration.dev.env, templates }
  );
  res.send(html);
});

templates.forEach((template) => {
  app.get(template.route, async (_, res) => {
    const html = await renderTemplate(
      template,
      configuration.dev.env
    );
    res.send(html);
  });
});

app.listen(configuration.dev.port, (error) => {
  if (error) {
    console.log(error);
  } else {
    syncServer();
  }
});
