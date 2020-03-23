// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const SERVER_URL = 'https://2ceesuwr5l.execute-api.eu-west-1.amazonaws.com/dev';
const SERVER_URL = 'https://api.covidografia.pt';

export const environment = {
  production: true,
  serverURL: SERVER_URL,
  apiUrl: SERVER_URL + '/api/v1/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
