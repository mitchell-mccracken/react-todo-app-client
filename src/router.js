import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import HomePage from "./homePage";
import LoginPage from "./loginPage";
import CreateUserPage from "./createUserPage";
import UserHomePage from "./userHomePage";
import TodoPage from "./todoPage";



const App_Routes = () => {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/todo" Component={TodoPage} />
        <Route path="/createUser" Component={CreateUserPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/userHome" Component={UserHomePage} />        
      </Routes>
    </BrowserRouter>
  )
};

export default App_Routes;