import { ToDoWrapper } from "./components/ToDoWrapper";
import { useState } from 'react';
import NavBar from "./navBar";
import './styles/loginPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:3300';

function LoginPage() {

  const setURL = ( additionalText ) => { return `${BASE_URL}${additionalText}`};
  // let count = 0;
  const [ count, setCount ] = useState(0);

  // keep track of form data
  const [ userValues, setUserValues ] = useState({
    userName: '',
    password: '',
    rePassword: '',
  });
  
  const handleInputChange = ( e ) => {
    const { name, value } = e.target;
    setUserValues( prevState => ({
      ...prevState,
      [name]: value
    }) );
  };

  const canSubmit = !!userValues?.password;

  const createUser = () => {

    console.log( userValues );
    
    axios.post( setURL('/createUser'), userValues )
    .then( res => {
      console.log( res.data );
      const { token } = res.data.data;
      console.log( token );

      Cookies.set('mitch_test_app', token.toString(), { expires: 1/3600 });


    } )
    .catch( e => console.error( e ) )
  };

  const func = () => { setCount(count + 1) };

  const hitRoute = () => {
    console.log('----- hit route ------');
    axios.get( setURL('/') )
    .then( res => {
      console.log( res.data );
    } )
    .catch( e => console.error( e ) )
  }

  return (
    <div id='login-page'>
      <NavBar />
      <h1>Login Page</h1>
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


export default LoginPage;