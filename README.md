# The Peng Project

This is a gradle based multi-module project, 
requirements are:
- git for project checkout
- java version 11 for compile and run
- docker compose to boot the database
- chrome browser for UI tests
everything should run out of the box after 
- checkout 
- booting a database from the compose file in /etc
- then using the commands:
```
./gradlew clean build bootRun
```
and open
```
http://localhost:8080/admin-console/index.html
```

**to reset the project to the checkout state**
```
./gradlew mrproper
```


## form-service
Implementing the backend service for providing the render data for the forms 
and retrieving the form content.


## form-reactive
Implementing a web component for rendering a data form.


## nginx
Uses nginx to run a webserver for static hosting the web component.


## How the admin-console was created
sourec: https://material.angular.io/guide/schematics

### install ng
`npm install -g @angular/cli`
### create the app
```
ng new admin-console
cd admin-console
```
### add the schematics
```
ng add @angular/material
ng add @angular/cdk
```
### add components
```
ng generate component home
ng generate component error
ng generate component process-view
ng generate component about
```
### create navigation component
`ng generate @angular/material:navigation navigation`
### edit to add app.component.html:
```
  <app-navigation></app-navigation>
  <router-outlet></router-outlet>
```  
### edit routing
  [...]
### add more components
```
ng generate @angular/material:table process-table
ng generate @angular/material:dashboard <component-name>
```
