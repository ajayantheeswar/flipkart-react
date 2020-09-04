import React from 'react'
import classes from './ProfileAction.module.css';
import DropMenu from './DropMenu/DropMenu';
import {MenuConfing} from './MenuConfig';
import Images from '../../../Assets/Images';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import DropDownItem from './DropDown/DropDownItem/DropDownItem';

// TODO - ADMIN context API

const ProfileAction = props => {
    return (
        <div className={classes['profile-action']}>
        <DropMenu 
            onClick = {() => { console.log('df'); if(!props.isAdmin) props.authShowHandler(true) } }
            name={ localStorage.getItem('name') || MenuConfing.Login.Name} 
            config={MenuConfing.Login.Values}
            isAuth = {props.isAuth}
            RClassName={['drop-menu','login']} > 
                {!props.isAdmin && props.isAuth ? <DropDownItem 
                    value={'Orders'} 
                    path={'/my-orders'} 
                    image={Images.orders} /> : null}
                {props.isAuth ? <DropDownItem 
                    value={'Logout'} 
                    path={'/logout'} 
                    image={Images.logoutBtn} /> : null }
            </DropMenu>             
            {!props.isAdmin && props.isAuth ? <div className={classes['cart-btn']}>
                <NavLink to={'/cart'}>Cart</NavLink>
                <img src={Images.cart} alt='cart' />
            </div> : null}
        </div>
    )
}


export default ProfileAction
