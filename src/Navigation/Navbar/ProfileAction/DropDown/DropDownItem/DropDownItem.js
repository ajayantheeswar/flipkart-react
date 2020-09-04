import React from 'react';
import classes from './DropDownItem.module.css'
import { NavLink } from 'react-router-dom';

const DropDownItem = props => {
    return (
        <div className={classes['drop-down-item']}>
            <img src={props.image} alt="img" />
            <NavLink className={classes['nav-lin']} to={props.path}>{props.value}</NavLink>
        </div>
    )
}

export default DropDownItem
