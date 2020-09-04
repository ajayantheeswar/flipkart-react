import React , {useState , useEffect} from 'react'
import classes from './Search.module.css'
import SearchFilter from './SearchFilter/SearchFilter'
import SearchResults from './SearchResults/SearchResults'

import axios from '../Store/Interceptor';

const getCatagoryList = (searchQuery,sortBy,successFunc,errFunc) => {
    axios.get(`/public/search${searchQuery}&sortBy=${sortBy}`)
        .then(successFunc)
        .catch(errFunc)
}

const Search = props => {
    
    const [products , setProducts] = useState([]);
    const [sortByOption,setSortByOption] = useState('Ref')
    const updateProducts = (sortBy='Ref') => getCatagoryList(props.location.search,
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
        <div className={classes['search-container']}>
            <SearchResults
                query={props.match.params.searchQuery} 
                products={products} 
                sortByFunc = {updateProducts}
                sortByOption={sortByOption} />
        </div>
    )
}

export default Search
