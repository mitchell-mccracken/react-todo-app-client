// import { useState } from 'react';
import NavBar from './navBar';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';
import { setURL } from './utils';
import { useState } from 'react';


function HomePage() {


  // check if a cookie exists
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userName, setUserName] = useState(null);


  // fetch userName based on token value
  const fetchUserName = () => {

    const token = cookies.mitch_test_app_token;

    if ( token ) {
      const data = { token };
      axios.post ( setURL('/api/user/fetchUserName'), data )
      .then( res => {

        const { userName } = res.data;
        if ( userName ) {
          setUserName( userName );
        }

      } )
      .catch( e => console.error( e ) )
    }
  };
  fetchUserName();

  return (
    <div>
      {/* <NavBar /> */}
      <NavBar />
      <h1>home page</h1>
      <h3>
        { (cookies.mitch_test_app_token) ? userName : 'NOT LOGGED IN'}
      </h3>

    </div>
  );
}


export default HomePage;