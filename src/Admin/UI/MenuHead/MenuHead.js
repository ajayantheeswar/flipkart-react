import React from 'react'
import classes from './MenuHead.module.css'

const MenuHead = props => {
    return (
        <ul className={classes['head-menu-list']}>
            {props.config.map(ele => <p>{ele.value}</p>)}
        </ul>
    )
}

export default MenuHead
