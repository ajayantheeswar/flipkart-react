import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = props => {
    return (
        <div className={classes['menu-item']} 
             onMouseEnter={()=> props.onMouseEnter()}
             onMouseLeave={()=> props.onMouseLeave()}>
            <p>{props.menuItem.Name}</p>
        </div>
    )
}

export default MenuItem
