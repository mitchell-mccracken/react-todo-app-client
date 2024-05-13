import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './navBar';
import TodoPage from './todoPage';
import CreateUserPage from './createUserPage';
import LoginPage from './loginPage';
import HomePage from './homePage';
import ErrorPage from './errorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserHomePage from './userHomePage';
import Routes from './router';

// mm 051324: as of now, no longer used
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />
  },
  {
    path: '/createUser',
    element: <CreateUserPage />
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/userHome',
    element: <UserHomePage/>
  }
]);

const logURL = () => {
  console.log(window.location.pathname)
}
logURL();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
