import React from 'react'
import classes from './SortFilter.module.css'

const SortFilter = props => {
    return (
        <div className={classes['filter']}>
            <h4>Sort By</h4>
            <div className={classes['options']}>
                <p className={props.sortByOption === 'Ref' ? classes['active'] : null} onClick={()=> props.sortBy('Ref')}  >Relavance</p>
                <p className={props.sortByOption === 'LH'  ? classes['active'] : null} onClick={()=> props.sortBy('LH')}>Price -- Low to High</p>
                <p className={props.sortByOption === 'HL'  ? classes['active'] : null} onClick={()=> props.sortBy('HL')}>Price -- High to Low</p>
            </div>
        </div>
    )
}

export default SortFilter
