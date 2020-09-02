import React from 'react'
import classes from './SortFilter.module.css'

const SortFilter = props => {
    return (
        <div className={classes['filter']}>
            <h4>Sort By</h4>
            <div className={classes['options']}>
                <p className={props.active !== 'P' ? classes['active'] : null} onClick={null}  >Popularity</p>
                <p className={props.active === 'LH'  ? classes['active'] : null} onClick={null}>Price -- Low to High</p>
                <p className={props.active === 'HL'  ? classes['active'] : null} onClick={null}>Price -- High to Low</p>
                <p className={props.active === 'NF'  ? classes['active'] : null} onClick={null}>Newest First</p>
            </div>
        </div>
    )
}

export default SortFilter
