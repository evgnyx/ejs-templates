import minifier from 'html-minifier';

export const minify = (html: string) => {
  return minifier.minify(html, {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    keepClosingSlash: true,
  });
};
