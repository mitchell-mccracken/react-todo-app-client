
import { Link } from 'react-router-dom';
import './styles/navBar.css';


function NavBar() {



  return (
    <div id='main'>
      <div id="nav-bar">
        <div id="links-wrapper">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/todo">Todo List</Link>
          </div>
        </div>

        <div id="user-info-wrapper">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/createUser">Create User</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default NavBar;