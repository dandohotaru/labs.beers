# About [wiki](https://github.com/angular/angular-cli/wiki)
## Setup [wiki](https://github.com/angular/angular-cli/wiki)
```
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```
## Create [wiki](https://github.com/angular/angular-cli/wiki/new)
```
ng new [name] --skip-commit --skip-git --skip-install --skip-tests
cd new-project
ng serve
```

# Generate [wiki](https://github.com/angular/angular-cli/wiki/generate)

## Module [wiki](https://github.com/angular/angular-cli/wiki/generate-module)
```
ng generate module --spec=false --routing=false [name]
```

## Component [wiki](https://github.com/angular/angular-cli/wiki/generate-component)
```
ng generate component --spec=false --flat=true [name] 
```

## Directive [wiki](https://github.com/angular/angular-cli/wiki/generate-component)
```
ng generate directive --spec=false --flat=true --module=[module] [name] 
```

## Pipe [wiki](https://github.com/angular/angular-cli/wiki/generate-pipe)
```
ng generate pipe --spec=false --flat=true --module=[module] [name] 
```

# Build [wiki](https://github.com/angular/angular-cli/wiki/build)
```
# these are equivalent
ng build --target=production --environment=prod
ng build --prod --env=prod
ng build --prod

# and so are these
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build
```

# Stories [wiki](https://github.com/angular/angular-cli/wiki/stories)
