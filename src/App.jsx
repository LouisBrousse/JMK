import './App.css'
import Home from './Home.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';
import TableauDeBord from './TableauDeBord.jsx';
import Nutrition from './Nutrition.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/tableaudebord",
    element: <TableauDeBord />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
]);

function App() {

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
