import axios from 'axios';
import { useState } from 'react';
import NavBar from './navBar';
import './styles/createUserPage.css';
import Cookies from 'js-cookie';
import{ setURL, APP_TOKEN_KEY, APP_UID_KEY } from './utils';
import bcrypt from 'bcryptjs';
import NewOrderComponent from './components/NewOrderComponent';
import LoginPage from './loginPage';


function UserHomePage() {

  const [ userName, setUserName ] = useState( 'none found' );
  const [ openOrders, setOpenOrders ] = useState( [] );
  const [ pastOrders, setPastOrders ] = useState( [] );

  const [ showModal, setShowModal ] = useState(false);

  const showNewOrderModal = () => {
    setShowModal( !showModal );
  };

  const fetchUserName = () => {
    const userId = Cookies.get(APP_UID_KEY);

    axios.get( setURL( `/api/user/fetchUserName/${userId}`), {withCredentials: true} )
    .then( res => {
      const { userName } = res.data;
      if ( !userName ) {
        window.location.replace('http://localhost:3000/login');
        return (
          < LoginPage />
        )
      }
      setUserName( userName );
    })
    .catch( e => console.error( e ) )
  };

  fetchUserName();



  return ( !userName ) ? < LoginPage /> : (
    <div id='user-home-page'>
      <h1>{userName}</h1>

      <div>
        <button onClick={showNewOrderModal}>Create New Order</button>
      </div>

      <NewOrderComponent 
        show={showModal}
      />

      <hr />
      <div id='user-open-orders'>

      </div>

      <hr />
      <div id='user-past-orders'>

      </div>

    </div>
  )


}

export default UserHomePage;