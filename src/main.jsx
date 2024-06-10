import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import Recipes from './components/Recipes/Recipes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/recipes',
        element: <Recipes></Recipes> ,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
