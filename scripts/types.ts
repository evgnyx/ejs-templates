export type DevParams = {
  port: number;
}

export type TemplateConfigParams = {
  filename: string;
  source: string;
  layout: string | null;
  path: string;
  route: string;
}

export type ConfigParams = {
  templates: TemplateConfigParams[];
  dev: DevParams;
}
