import React ,{useState} from 'react'
import classes from './SearchBar.module.css';
import Images from '../../../Assets/Images';
import { withRouter } from 'react-router';

const SearchBar = props => {

    const [SearchValue, setSearchValue] = useState("")

    return (
        <div className={classes['search-bar']}>
            <input type="text" 
                placeholder="Search for products , brands and more"
                value={SearchValue}
                onChange={(event) => setSearchValue(event.target.value)}  />
            <img src={Images.searchIcon} alt="search" onClick={ () => {
                const params = new  URLSearchParams();
                params.append('search',SearchValue);
                props.history.push('/search?'+params.toString())

                }
            } />
        </div>
    )
}


export default withRouter(SearchBar)
