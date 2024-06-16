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
import ShowDetails from './components/ShowDetails/ShowDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';                                                              

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/recipes',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b'),
        element: <Recipes></Recipes> 
      },
      {
        path: '/recipes/:recipeId',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipeId}`),
        element: <ShowDetails></ShowDetails>
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
