import React from 'react'
import classes from './SearchResults.module.css';
import SortFilter from './SortFilter/SortFilter';
import ResultList from './ResultList/ResultList';

const SearchResults = props => {
    console.log(props)
    return (
        <div className={classes['search-result']}>
            <div className={classes['search-head']} >
                <h4>{props.query || 'Samsung Mobiles'}</h4>
                <p>{`(Showing ${props.leftEdge || 1} – ${props.rightEdge || 24} products of ${props.totalPoducts || 527} products)`}</p>
            </div>
            <SortFilter sortByOption={props.sortByOption} sortBy={props.sortByFunc} />
            <ResultList productList={props.products} />
        </div>
    )
}

export default SearchResults
