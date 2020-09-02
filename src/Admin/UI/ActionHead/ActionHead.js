import React from 'react';
import classes from './ActionHead.module.css';

const ActionHead = props => {
    return (
        <div className={classes['action-head']}>
            <p>{props.children}</p>
        </div>
    )
}

export default ActionHead
