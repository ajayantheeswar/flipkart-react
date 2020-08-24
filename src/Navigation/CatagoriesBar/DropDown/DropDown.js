import React from 'react'
import classes from './DropDown.module.css';

const DropDown = props => {

    if(!props.visible){
        return null
    }
    return (
        <div className={classes['drop-down']}>
            
        </div>
    )
}

export default DropDown
