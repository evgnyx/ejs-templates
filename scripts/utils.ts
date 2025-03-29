// import ts from 'typescript';
// import { join } from 'path';
// import { paths } from './configuration';
// import { readDir, readFile } from './helpers';

// const getUtils = () => {
//   const exports = {};
//   const require = () => exports;
  
//   const files = readDir(paths.utils);
//   files.forEach((filename) => {
//     const content = readFile(join(paths.utils, filename));
//     const js = ts.transpile(content, {
//       module: ts.ModuleKind.CommonJS,
//     });
//     eval(js);
//   });
//   return exports;
// };

// export const utils = getUtils();
