export type NonNull<T> = { [K in keyof T]: NonNullable<T[K]> };

export type DevParams = {
  port: number;
}

export type TemplateConfigParams = {
  route: string;
  source: string;
  filename: string;
  path: string;
  layout: string | null;
  styles: string | null;
}

export type ConfigParams = {
  templates: TemplateConfigParams[];
  dev: DevParams;
}
