import axios from 'axios';
import { useState } from 'react';
import NavBar from './navBar';
import './styles/createUserPage.css';
import Cookies from 'js-cookie';
import{ setURL, APP_TOKEN_KEY } from './utils';
import bcrypt from 'bcryptjs';


function LoginPage() {


  // keep track of form data
  const [ userValues, setUserValues ] = useState({
    userName: '',
    password: '',
  });

  // function for input change event
  const handleInputChange = ( e ) => {
    const { name, value } = e.target;
    setUserValues( prevState => ({
      ...prevState,
      [name]: value
    }) );
  };


  const canSubmit = !!userValues?.password;


  const loginUser = () => {

    // userValues.password = bcrypt.hash( userValues.password, 10 );
    axios.post( setURL('/api/user/login'), userValues)
    .then( res => {
      console.log(res.data);

      const { token } = res.data;
      Cookies.set(APP_TOKEN_KEY, token.toString(), { expires: 5/24/60 });

    })
    .catch( e => console.error(e) )
  };


  return (
    <div id='user-login-page'>
      <NavBar />
      <h1>Login</h1>

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
            type="password"
            name="password"
            value={userValues.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrapper">
          <button 
            onClick={loginUser}
            disabled={!canSubmit}
          >
            Submit
          </button>  
        </div>

      </div>
    </div>
  )

}

export default LoginPage;