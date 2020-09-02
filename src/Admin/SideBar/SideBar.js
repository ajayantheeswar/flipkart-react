import React from 'react'
import classes from './SideBar.module.css'

const SideBar = props => {
    return (
        <div className={classes['side-bar']}>
            <div className={classes['nav-head']}>
                <h2>Administration</h2>
            </div>
            <ul className={classes['nav-routes']}>
                <p className={classes['active']}>Catagories</p>
                <p>Products</p>
            </ul>
        </div>
    )
}

export default SideBar
