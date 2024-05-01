import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import CreateBusiness from "../components/CreateBusiness/CreateBusiness";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children:[
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/business',
            element:<CreateBusiness />
        }
      ]
    },
  ]);

  export default router