import React from 'react'
import classes from './SideBar.module.css'
import { NavLink } from 'react-router-dom'

const SideBar = props => {
    return (
        <div className={classes['side-bar']}>
            <div className={classes['nav-head']}>
                <h2>Administration</h2>
            </div>
            <ul className={classes['nav-routes']}>
                <NavLink className={classes['rou']} activeClassName={classes['rou-active']} to={'/admin/dashboard/products'} >Products</NavLink>
                <NavLink className={classes['rou']} activeClassName={classes['rou-active']} to={'/admin/dashboard/orders'} >Orders</NavLink>
            </ul>
        </div>
    )
}

export default SideBar
