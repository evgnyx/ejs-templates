import browserSync from 'browser-sync';
import { configuration } from './configuration';

const PORT = configuration.dev.port;

// export const connectTemplate = () => {
//   return `
//     <script id="__bs_script__">//<![CDATA[
//       (function() {
//         try {
//           var script = document.createElement('script');

//           if ('async') script.async = true;

//           script.src = 'http://HOST:${PORT}/browser-sync/browser-sync-client.js?v=3.0.3'
//             .replace("HOST", location.hostname);

//           if (document.body) {
//             document.body.appendChild(script);
//           } else if (document.head) {
//             document.head.appendChild(script);
//           }
//         } catch (e) {
//           console.error("Browsersync: could not append script tag", e);
//         }
//       })()
//     //]]></script>
//   `
// };

export const syncServer = () => {
  browserSync({
    port: PORT + 1,
    ui: false,
    proxy: `localhost:${PORT}`,
    files: ['src/**/*', 'server/index.ejs'],
    ghostMode: false,
    open: false,
  });  
};
