# How to view configs setup [wiki](http://confluence:8090/display/KIKLOS/Git+Setup)
show all git settings and corresponding locations
```
git config --list --show-origin
```

# How to add configs
create a project specific config, you have to execute this under the project's directory.
```
git config user.name "John Doe Project"
```

create a global config for current user profile
```
git config --global user.name "John Doe Global"
```

create a system config for current machine
```
git config --system user.name "John Doe System"
```

cache credentials at repo level
```
git config credential.helper wincred
```

# How to setup proxy 
setup proxy
```
git config --global http.proxy http://proxyvip1:8080
git config --global http.proxy http://proxyvip1.ces-cdr.eu.int:8080
```

check proxy
```
git config --global --get http.proxy
```

reset proxy
```
git config --global --unset http.proxy
```