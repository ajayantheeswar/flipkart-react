import React from 'react'
import classes from './Dashboard.module.css';
import SideBar from '../SideBar/SideBar';
import Products from '../Products/Products';
import Catagories from '../Catagories/Catagories';
import { Switch, Route } from 'react-router';
import Orders from '../Orders/Orders';

const Dashboard = props => {
    return (
        <div className={classes['dashboard']}>
            <SideBar />
            <div className={classes['action-area']}>
                <Switch>
                    <Route path='/admin/dashboard/products' component={Products} />
                    <Route path='/admin/dashboard/orders' component={Orders} />
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard
