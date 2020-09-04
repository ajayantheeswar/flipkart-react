import React from 'react'
import ResultItem from './ResultItem/ResultItem';
const ResultList = props => {
    return (
        <ul>
           {props.productList.map(product => <ResultItem product={product} />)}
        </ul>
    )
}

export default ResultList
