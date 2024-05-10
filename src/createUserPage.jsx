import { ToDoWrapper } from "./components/ToDoWrapper";
import { useState } from 'react';
import NavBar from "./navBar";
import './styles/createUserPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import{ setURL, APP_TOKEN_KEY } from './utils';
import bcrypt from 'bcryptjs';

function CreateUserPage() {

  // keep track of form data
  const [ userValues, setUserValues ] = useState({
    userName: '',
    password: '',
    rePassword: '',
    email: '',
  });
  
  // function for input change event
  const handleInputChange = ( e ) => {
    let { name, value } = e.target;

    setUserValues( prevState => ({
      ...prevState,
      [name]: value
    }) );
  };

  // flag used to disable submit button
  const canSubmit = !!userValues?.password;


  // function to create a user
  const createUser = async () => {

    // TODO: check that passwords match
    const { password, rePassword } = userValues;
    const salt = bcrypt.genSaltSync(10);
    userValues.password = await bcrypt.hash( password, salt );
    userValues.rePassword = await bcrypt.hash( rePassword, salt)
    
    axios.post( setURL('/api/user/create'), userValues )
    .then( res => {
      const { token } = res.data;

      // set cookie to expire in 5 minutes
      // Cookies.set('mitch_test_app_token', token.toString(), { expires: 5/24/60 });   // OLD CODE
      Cookies.set(APP_TOKEN_KEY, token.toString(), { expires: 5/24/60 });
    } )
    .catch( e => console.error( e ) )
  };



  return (
    <div id='create-user-page'>
      <NavBar />
      <h1>Create User Page</h1>
      <hr />

      <div className="FCNW">

        <div className="input-wrapper">
          <label htmlFor="">User Name</label>
          <input 
            type="text"
            name="userName"
            value={userValues.userName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="">password</label>
          <input 
            type="text"
            name="password"
            value={userValues.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="">re-password</label>
          <input 
            type="text"
            name="rePassword"
            value={userValues.rePassword}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="">email</label>
          <input 
            type="text"
            name="email"
            value={userValues.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrapper">
          <button 
            onClick={createUser}
            disabled={!canSubmit}
          >
            Submit
          </button>  
        </div>
        
      </div>
    </div>
  );
}


export default CreateUserPage;