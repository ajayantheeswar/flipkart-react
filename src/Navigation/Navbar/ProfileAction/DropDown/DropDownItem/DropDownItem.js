import React from 'react';
import classes from './DropDownItem.module.css'

const DropDownItem = props => {
    return (
        <div className={classes['drop-down-item']}>
            <img src={props.image} alt="img" />
            <p>{props.value}</p>
        </div>
    )
}

export default DropDownItem
