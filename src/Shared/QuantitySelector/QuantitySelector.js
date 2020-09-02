import React from 'react'
import classes from './QuantitySelector.module.css';

const QuantitySelector = props => {
    return (
        <div className={classes['quant-selector']}>
            <p onClick={() => props.sub()}>-</p>
            <label>{props.qty}</label>
            <p onClick={() => props.add()}>+</p>
        </div>
    )
}

export default QuantitySelector
