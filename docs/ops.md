
## Install (some requirements)
   
* Local
```
  npm install rimraf -g
  rimraf node_modules dist
  npm install --save-dev @angular/cli@latest
  npm install
```

* Global
```
  npm uninstall -g @angular/cli
  npm cache clean
  npm install -g @angular/cli@latest
```


## Build (application artifacts)
* About the build options 
  - https://github.com/angular/angular-cli/wiki/build

* Cli breaking changes
  - https://github.com/angular/angular-cli/pull/4385



## Deploy (with gh-pages)

* Install gh pages plugin globally
  - https://github.com/tschaub/gh-pages
  ```  
  npm install -g gh-pages
  ```

* Build the deployable artifacts
  ```
  ng build --base-href https://github.com/dandohotaru/labs.beers/
  copy dist/index.html dist/404.html
  gh-pages -d dist
  ```


## Deploy (with angular-cli-ghpages)

* Install gh pages plugin globally
  - https://www.npmjs.com/package/angular-cli-ghpages
  ```
  npm install -g angular-cli-ghpages
  ```

* Build the deployable bits and pieces
  ```
  ng build --prod --base-href "https://dandohotaru.github.io/labs.beers/"
  cp dist/index.html dist/404.html
  angular-cli-ghpages [OPTIONS]
  ngh [OPTIONS]
  ```