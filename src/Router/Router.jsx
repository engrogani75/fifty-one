import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Login/Registation";
import Orders from "../Pages/order/Orders";
import PrivateOrder from "../Pages/order/PrivateOrder";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>,  
        },
        {
          path: "/login",
          element: <Login></Login>, 
      },

      {
        path: "/registation",
        element: <Registation></Registation>,  
    },
    {
      path: "/order",
      element: <PrivateOrder><Orders></Orders></PrivateOrder>,  
  },

    ]},
   
  ]);



export default router;