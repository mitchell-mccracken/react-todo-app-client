
// GLOBALS
//-----------------------
const BASE_URL = 'http://localhost:3300';
const APP_TOKEN_KEY = 'mitch_test_app_token';
//-----------------------

const setURL = ( additionalText ) => { return `${BASE_URL}${additionalText}`};




module.exports = {
  setURL,
  BASE_URL,
  APP_TOKEN_KEY
}