// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBs7vMnTd05vDCrLqdWbScLkNEOoaSidNY",
    authDomain: "laritz-password-eeper.firebaseapp.com",
    databaseURL: "https://laritz-password-eeper.firebaseio.com",
    projectId: "laritz-password-eeper",
    storageBucket: "laritz-password-eeper.appspot.com",
    messagingSenderId: "537677073003"
  }
};
