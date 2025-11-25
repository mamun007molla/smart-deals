import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Layout/Root';
import Home from '../components/Home/Home';
import AllProducts from '../components/AllProduct/AllProducts';


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
    ]
  },
]);
export default router;