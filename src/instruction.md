##How to make it work(Visual Studio Code)[Article](http://asp.net-hacker.rocks/2016/09/19/aspnetcore-and-angular2-using-dotnetcli-and-vscode.html):

####1. Download and install:
  - npm;
  - Node.js;
  - .NET CLI(http://get.asp.net)

####1. Restore NuGet packages: dotnet restore
####1. Install npm packages globally:
  - npm install -g typescript
  - npm install -g typings
  - npm install -g gulp
  - npm install -g gulp-cli

####1. Install all packages: npm install(will run 'typings intall' and 'bower install' after)
####1. Run Gulp task: gulp lib(will copy necessary files from node_modules to wwwroot)
####1. Run application:
  - npm start(or 'tsc -w' and 'dotnet watch run' in different consoles for separate output)