# ejs-templates
A configuration of **ejs** + **express** + **typescript** for generating static HTML files with support of reusable layouts.

# Usage
`npm start` - starts the development server with hot reloading.  
`npm run build` - generates HTML files from templates in `src/templates`.  

### Project Structure
**templates** - directory for EJS templates.  
**dist** - output directory for generated HTML files.  
**partials** - directory for reusable EJS components.  
**layout** - default layout used for all generated HTML files (if no custom layout was defined).  
**styles** - Default styles that will be copied (inserted at `<!-- STYLES -->`) into the `<style>` tag of the layout being used.  
**utils** - TypeScript files used in EJS templates during HTML file generation.
```
    ├── dist
    └── src
        ├── layout
        │   └── index.ejs
        │   └── **/*
        ├── partials
        │   └── **/*
        ├── styles
        │   ├── index.css
        │   └── **/*
        ├── templates
        │   └── **/*
        └── utils
            ├── index.ts
            └── **/*
```

# Configuration

### 1. Simple Generation 

Place your file `page1.ejs` in the `src/templates` directory. As a result, an HTML file `dist/page1.html` will be generated, using the default layout located at `src/layout/index.ejs` and copied the default styles from `src/styles/index.css`.

```
    ├── dist
    │   └── page1.html
    └── src
        └── templates
            └── page1.ejs
```

### 2. Customizable Generation

Place your template folder `page2/index.ejs` in `src/templates`, which will generate `dist/page2.html`.

```
    ├── dist
    │   └── page2.html
    └── src
        └── templates
            └── page2
                └── index.ejs
```

To customize the template, create a file `src/templates/page2/config.json`:

- `path: "dirname"` - the file will be placed in the directory `dist/{dirname}/page2.html`;
- `filename: "filename.html"` - creates a file with the specified name `{filename}`;
- `layout: null` - disables the layout;
- `styles: null` - disables styles.

For using a custom layout, create a file `src/templates/page2/layout.ejs`.  
For using custom styles, create a file `src/templates/page2/index.css`.  

```
    ├── dist
    │   └── about
    │       └── index.html
    └── src
        └── templates
            └── page2
                ├── config.json // { "path": "about", "filename": "index.html" }
                ├── index.css
                ├── index.ejs
                └── layout.ejs
```
