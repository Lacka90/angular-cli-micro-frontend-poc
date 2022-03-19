# AngularCliMicroFrontendPoc
This project is a POC to use angular-element based micro-frontends and shared ui-library in an angular application.

## Micro-frontends
The current POC contains these parts
- Root angular 12 project
- ng-micro-frontend named subproject (#1 micro-frontend)
- ng-other micro-frontend named subproject (#2 micro-frontend)

The 2 micro frontends built and bundled with npm scripts:
- `npm run build-ng-micro`
- `npm run build-ng-other-micro`

The core application load the micro-frontend bundles with `@angular-extensions/elements`'s directive named: `*axLazyElement`

Example usage of a micro frontend:
```
<ng-micro-component
  *axLazyElement="'http://localhost:3000/ng-micro-frontend-bundle.js'"
  [authToken]="'asdToken'"
  [backendUrl]="'http://my-backend.com'"
></ng-micro-component>
```

Other more advanced usage of this lib can be found at:
- https://angular-extensions.github.io/elements/#/examples/advanced

### Use web-components in development

To make web-components bundle locally available, you need to expose it in a local url.

You can do this with the following npm script:
- `npm run serve-micro-bundles`

This server will live reload when you run any micro-frontend build command.

### Develop micro-frontend separately

You can develop the micro-frontend separately from the core application. 
To run only that part these are the scripts that do the job:
- `npm run start-ng-micro` 
- `npm run start-ng-other-micro`

You can configure the micro-frontend input params in the enclosure app.component which is used only for development purposes, the built bundle will skip this file.

### Generating new micro frontend

The following step will create a new web-component that you can use in your application.

- Create micro-frontend app:
  - `npm run ng -- g application micro-frontend-name --style=scss --routing=false `

- Setup internal angular builder webpack in angular json (find the created subproject):
  ```
  "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "customWebpackConfig": {
              "path": "micro.webpack.config.js",
              "mergeStrategies": {
                "externals": "replace"
              }
            },
            "outputPath": "dist/ng-other-micro-frontend",
  ```

- Create npm scripts:
  - `"start-micro-frontend-name": "ng serve --project=micro-frontend-name --port=xxxx"`
  - `"build-micro-frontend-name": "ng build --project micro-frontend-name --output-hashing=none && cat dist/micro-frontend-name/runtime.js dist/micro-frontend-name/polyfills.js dist/micro-frontend-name/main.js > dist/micro-frontend-name-bundle.js"`

