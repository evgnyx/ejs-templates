import browserSync from 'browser-sync';
import { configuration } from './configuration';

const PORT = configuration.dev.port;

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
