import fs from 'fs';

export const exists = (path: string): boolean => {
  return fs.existsSync(path);
};

export const getStats = (path: string): fs.Stats => {
  return fs.lstatSync(path);
}

export const readFile = (filepath: string): string => {
  return fs.readFileSync(filepath, 'utf8') || '';
};

export const readDir = (dirpath: string): string[] => {
  return fs.readdirSync(dirpath) || [];
};

export const readJSON = <R extends Record<string, unknown>>(filepath: string): R => {
  const content = readFile(filepath);
  if (content) return JSON.parse(content);
  return {} as R;
};
