# ejs-templates

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

# Usage
### 1.
    ├── dist
    │   └── page1.html
    └── src
        └── templates
            └── page1.ejs

### 2.
    ├── dist
    │   └── page2.html
    └── src
        └── templates
            └── page2
                └── index.ejs

### 3.
    ├── dist
    │   └── page3.html
    └── src
        └── templates
            └── page3
                ├── config.json
                ├── index.css
                ├── index.ejs
                └── layout.ejs
