import React from 'react'
import classes from './Navbar.module.css';


import Images from '../../Assets/Images/index';
import SearchBar from './SearchBar/SearchBar';
import ProfileAction from './ProfileAction/ProfileAction';

const Navbar = props => {
    return (
        <div className={classes['nav-bar-container']}>
            <div className={classes['nav-bar']}>
                <div className={classes['logo-search']}>
                    <div className={classes['nav-bar__logo']}>
                        <img src={Images.flipkartLogo} alt="Flipkart"/>
                        <span className={classes['nav-bar__logo--flipkart-plus']}>
                            Explore
                            <span>Plus</span>
                            <img src={Images.plus_star} alt='plus' style={{width:'10px' , marginLeft:'3px'}} />
                        </span>
                    </div>
                    <SearchBar />
                </div>
                <ProfileAction />
            </div>
            
        </div>
    )
}

export default Navbar
