
import { Link } from 'react-router-dom';

function NavPage() {

  const navToCounterPage = () => { window.open('./mitchPage') };

  return (
    <div id="wrapper">
      
      <Link to="/mitchPage">Counter Page</Link>
      <div>LogIn Page</div>
    </div>
  )
}



export default NavPage;