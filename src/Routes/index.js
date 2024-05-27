import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";

  import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Schedule from "../Pages/Schedule";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },


    {
      path: "/about",
      element: <About/>,
    },

    {
      path: "/contact",
      element: <Contact/>,
    },

    {
      path: "/schedule",
      element: <Schedule/>,
    },

    // {
    //   path: "/",
    //   element: <Home/>,
    // },
  ]);

  export default router