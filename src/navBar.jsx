
import { Link } from 'react-router-dom';
import './styles/navBar.css';
import HomePage from './homePage';
import LoginPage from './loginPage';
import TodoPage from './todoPage';


function NavBar() {

  const navToCounterPage = () => { window.open('./mitchPage') };



  return (
    <div id='main'>
      <div id="nav-bar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/todo">Todo List</Link>
        </div>
        <div>
          <Link to="/login">Login Page</Link>
        </div>
      </div>
    </div>
  )
}


export default NavBar;