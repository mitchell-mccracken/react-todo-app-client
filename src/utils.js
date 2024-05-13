
// GLOBALS
//-----------------------
const BASE_URL = 'http://localhost:3300';
const APP_TOKEN_KEY = 'mitch_test_app_token';
const APP_UID_KEY = 'mitch_test_app_uid';
//-----------------------



// quick way to set urls for BE routes
const setURL = ( additionalText ) => { return `${BASE_URL}${additionalText}`};



/**
 * used as a generic change function for form data if it is stored as obj = { name: value }
 * @param {function} setHelper the update function from useState
 * @returns function
 */
const HandleInputChange = ( setHelper ) => {
  const _handleInputChange = ( e ) => {
    const { name, value, checked, type } = e.target;
    const newValue = ( type === 'checkbox' ) ? checked : value;
    setHelper( prevState => ({
      ...prevState,
      [name]: newValue
    }) );
  };
  return _handleInputChange;
}


module.exports = {
  setURL,
  BASE_URL,
  APP_TOKEN_KEY,
  APP_UID_KEY,
  HandleInputChange
}