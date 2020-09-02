import React from 'react';
import classes from './SearchFilter.module.css';

const SearchFilter = props => {
    return (
        <div className={classes['search-filter']}>
            <div className={classes['search-head']}>
                <h3>Filters</h3>
            </div>
            <div className={classes['filter-container']}>
                <p className={classes['filter-head']} >{'Filter Head'}</p>

            </div>
        </div>
    )
}

export default SearchFilter
