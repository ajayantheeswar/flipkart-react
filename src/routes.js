import React from "react";
import { Route } from "react-router";

import ProductDetails from "./HOC/ProductDeatils/ProductDetails"; 
import HomePage from './HomePage/HomePage';
import Dashboard from "./Admin/Dashboard/Dashboard";
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";


export const publicUserRoutes = [
    <Route path={'/'} exact component={HomePage} />,
    <Route exact path={'/cart'} component={Cart} />,
    <Route exact path={'/my-orders'} component={Orders}/>,
    <Route exact path={'/:productID'} component={ProductDetails}/>,
    
]

/*export const privilagedRoutes = [
    <Route path={'/cart'} exact component={}
]*/