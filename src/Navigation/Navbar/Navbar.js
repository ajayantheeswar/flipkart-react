import React , {useState}from 'react'
import classes from './Navbar.module.css';


import Images from '../../Assets/Images/index';
import SearchBar from './SearchBar/SearchBar';
import ProfileAction from './ProfileAction/ProfileAction';
import AuthContainer from '../../Auth/AuthContainer';

import { connect } from 'react-redux';
import * as AuthActions from  '../../Store/Actions/Auth';
import { withRouter } from 'react-router';


const Navbar = props => {

    const [authContainerVisiblity,setAuthContainerVisiblity] = useState(false)

    return (
        <div className={classes['nav-bar-container']}>
            <div className={classes['nav-bar']}>
                <div className={classes['logo-search']}>
                    <div className={classes['nav-bar__logo']} onClick={() => props.history.push('/')}>
                        <img src={Images.flipkartLogo} alt="Flipkart"/>
                        <span className={classes['nav-bar__logo--flipkart-plus']}>
                            Explore
                            <span>Plus</span>
                            <img src={Images.plus_star} alt='plus' style={{width:'10px' , marginLeft:'3px'}} />
                        </span>
                    </div>
                    <SearchBar />
                </div>
                <ProfileAction
                    isAdmin = {props.isAdmin} 
                    isAuth = {props.isAuth}
                    authShowHandler={setAuthContainerVisiblity}/>
            </div>
            {authContainerVisiblity && !props.isAuth ? <AuthContainer authShowHandler={setAuthContainerVisiblity} /> : null}
        </div>
    )
}

const mapPropsToState = state => {
    return {
      isAuth : state.auth.auth,
      isAdmin : state.auth.isAdmin
    }
  }
  
const mapPropsToDisPatch = dispatch => {
   return {
     checkAuth : () => dispatch(AuthActions.AuthCheckAsync()),
     logout : () => dispatch(AuthActions.AuthLogout())    }
}

export default connect(mapPropsToState,mapPropsToDisPatch)(withRouter(Navbar))
