import React from 'react';
import classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = props => {
    return (
        <div className={classes['menu-item']} 
             onMouseEnter={()=> props.onMouseEnter()}
             onMouseLeave={()=> props.onMouseLeave()}>
            <NavLink
                style={{color: "black"}}
                activeStyle={{color: "#2874f0"}} 
                to={props.menuItem.route} >{props.menuItem.Name}</NavLink>
        </div>
    )
}

export default MenuItem
