import React from 'react'
import classes from './Search.module.css'
import SearchFilter from './SearchFilter/SearchFilter'
import SearchResults from './SearchResults/SearchResults'

const Search = props => {
    return (
        <div className={classes['search-container']}>
            <SearchResults />
        </div>
    )
}

export default Search
