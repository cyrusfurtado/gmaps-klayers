# GMapsKLayers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Steps required

* Include Google Maps JavaScript Api from cdn
  * Add google maps api script here
  * To create a new api key. Navigate to https://console.developers.google.com
  * Enable Google Maps JavaScript API
  * Create A new project if one does not exist 
  * Next from left side menu -> APIs & Services -> Credentials -> Create a new API key -> Paste the key below
* Install type definitions for googleMaps Javascript API `npm install --save-dev @types/googlemaps`
* Add index.d.ts file in `src` folder to get ride of TypeScript missing module error & restart developement server
