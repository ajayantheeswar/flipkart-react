import React from "react";
import { Route, withRouter } from "react-router";

import ProductDetails from "./HOC/ProductDeatils/ProductDetails"; 
import HomePage from './HomePage/HomePage';
import Dashboard from "./Admin/Dashboard/Dashboard";
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";
import CatagoryResult from "./HOC/CatagoryResult/CatagoryResult";
import Search from './Search/Search';

export const userProtectedRoutes = [
    <Route exact path={'/cart'} component={Cart} />,
    <Route exact path={'/my-orders'} component={Orders}/>,
]

export const adminProtectedRoutes = [
    <Route path={'/admin/dashboard/'} component={Dashboard} />,
    <Route path = {'/'} component={Dashboard} />
]


export const publicRoutes = [
    <Route path={'/'} exact component={HomePage} />,
    <Route path={'/search'} render={ (props) => <Search {...props} key={window.location.pathname} />} />,
    <Route path={'/catagory/:catagoryName'} render={ (props) => <CatagoryResult {...props} key={window.location.pathname} />} />,
    <Route exact path={'/:productID'} component={ProductDetails}/>
]


/*export const privilagedRoutes = [
    <Route path={'/cart'} exact component={}
]*/