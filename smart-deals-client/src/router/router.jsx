import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Layout/Root';
import Home from '../components/Home/Home';
import AllProducts from '../components/AllProduct/AllProducts';
import Register from '../components/register/Register';
import Myproducts from '../components/myproducts/Myproducts';
import Mybids from '../components/mybids/Mybids';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'/allProducts',
            Component:AllProducts,
        },
        {
          path:'/register',
          Component:Register
        },
        {
          path:'/myProducts',
          element:<Myproducts></Myproducts>
        },
        {
          path:'/myBids',
          element:<Mybids></Mybids>
        }
    ]
  },
]);
export default router;