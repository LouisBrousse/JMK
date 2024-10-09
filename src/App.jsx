import { useState } from 'react'
import './App.css'
import Register from './Register.jsx';
import Profile from './Profile.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
