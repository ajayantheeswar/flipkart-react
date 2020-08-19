import React ,{useState} from 'react'
import classes from './SearchBar.module.css';
import Images from '../../../Assets/Images';

const SearchBar = () => {

    const [SearchValue, setSearchValue] = useState("")

    return (
        <div className={classes['search-bar']}>
            <input type="text" 
                placeholder="Search for products , brands and more"
                value={SearchValue}
                onChange={(event) => setSearchValue(event.target.value)}  />
            <img src={Images.searchIcon} alt="search" />
        </div>
    )
}


export default SearchBar
