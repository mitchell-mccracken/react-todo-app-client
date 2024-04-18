import { ToDoWrapper } from "./components/ToDoWrapper";
import { useState } from 'react';
import NavBar from "./navBar";



function LoginPage() {
  // let count = 0;
  const [ count, setCount ] = useState(0);

  const func = () => { setCount(count + 1) };

  return (
    <div id='login-page'>
      <NavBar />
      <h1>Login Page</h1>
    </div>
  );
}


export default LoginPage;