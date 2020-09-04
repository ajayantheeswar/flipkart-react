import React from 'react'
import classes from './CatagoryResult.module.css';
import SearchResults from '../../Search/SearchResults/SearchResults';

import axios from '../../Store/Interceptor';
import { useEffect } from 'react';
import { useState } from 'react';

const getCatagoryList = (catagory,sortBy,successFunc,errFunc) => {
    axios.get(`/public/get-catagory${'?catagoryName=' + catagory + '&sortBy=' + sortBy}`)
        .then(successFunc)
        .catch(errFunc)
}
 

const CatagoryResult = props => {

    const [products , setProducts] = useState([]);
    const [sortByOption,setSortByOption] = useState('Ref')
    const updateProducts = (sortBy='Ref') => getCatagoryList(props.match.params.catagoryName,
                                                            sortBy,
                                                            (res) => {setProducts(res.data.products); setSortByOption(sortBy)},
                                                            (err) => console.log(err))

    useEffect( () => {
        updateProducts()
    },[])

    if(!products.length > 0) {
        return <p>Product Not Found</p>
    }

    return (
        <div className={classes['cat-result-list']}>
            <SearchResults 
                query={props.match.params.catagoryName}
                sortByFunc = {updateProducts}
                sortByOption={sortByOption}
                products={products} />
        </div>
    )
}

export default CatagoryResult
