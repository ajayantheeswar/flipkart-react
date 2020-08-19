import React from 'react'
import classes from './DropDown.module.css';

const DropDown = props => {

    if(!props.visible){
        return null
    }

    return (
        <div className={classes['drop-down']}>
            <div className={classes['alp-in']} ></div>
            <div className={classes['arrow-up']}></div>
            {props.children}
        </div>
    )
}

export default DropDown
