import React from 'react'
import classes from './Dashboard.module.css';
import SideBar from '../SideBar/SideBar';
import Products from '../Products/Products';

const Dashboard = props => {
    return (
        <div className={classes['dashboard']}>
            <SideBar />
            <div className={classes['action-area']}>
                <Products />
            </div>
        </div>
    )
}

export default Dashboard
