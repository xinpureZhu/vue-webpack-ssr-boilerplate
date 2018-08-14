# vue-webpack-ssr-boilerplate

> A full-featured Webpack setup with Server Side Render

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ yarn global add vue-cli
$ vue init xinpureZhu/vue-webpack-ssr-boilerplate my-project
$ cd my-project
$ yarn
$ yarn dev
```

### What's Included

- `yarn dev`: first-in-class development experience.
  - An simply Express server with webpack-dev-middleware and webpack-hot-middleware pre-configured.
  - Webpack + `vue-loader` for single file Vue components.
  - `vue-router` for router manage
  - `vuex` for state manage
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Source maps

- `yarn build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - `vue-server-renderer` for SSR
  - Compiled vue-ssr-client-manifest.json
  - Compiled vue-ssr-server-bundle.json
  - Generate service worker

- `yarn start`: Serve for production.
  - Express server
  - Supports PWA


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```