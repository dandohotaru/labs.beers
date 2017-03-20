Build
* About the build options 
  https://github.com/angular/angular-cli/wiki/build


Deploy v1
* Cli breaking cahnges
  https://github.com/angular/angular-cli/pull/4385

* Install gh pages plugin globally
  https://github.com/tschaub/gh-pages

* Build the deployable artifacts
  ng build --base-href https://github.com/dandohotaru/labs.beers/
  copy dist/index.html dist/404.html
  gh-pages -d dist

Deploy v2

* Install gh pages plugin globally
  https://www.npmjs.com/package/angular-cli-ghpages
  npm i -g angular-cli-ghpages

* Build the deployable bits and pieces
  ng build --prod --base-href "https://dandohotaru.github.io/labs.beers/"
  cp dist/index.html dist/404.html
  angular-cli-ghpages [OPTIONS]
  ngh [OPTIONS]