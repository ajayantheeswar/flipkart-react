import React from 'react'
import classes from './ProfileAction.module.css';
import DropMenu from './DropMenu/DropMenu';
import {MenuConfing} from './MenuConfig';
import Images from '../../../Assets/Images';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

// TODO - ADMIN context API

const ProfileAction = props => {
    return (
        <div className={classes['profile-action']}>
            {!props.isAdmin ? <DropMenu 
                onClick = {() => { console.log('df'); props.authShowHandler(true)} }
                name={ localStorage.getItem('name') || MenuConfing.Login.Name} 
                config={MenuConfing.Login.Values}
                isAuth = {props.isAuth}
                RClassName={['drop-menu','login']} /> : null}
            <DropMenu 
                name={'More'} 
                config={MenuConfing.Login.Values}
                RClassName={['drop-menu']} />
            {!props.isAdmin && props.isAuth ? <div className={classes['cart-btn']}>
                <NavLink to={'/cart'}>Cart</NavLink>
                <img src={Images.cart} alt='cart' />
            </div> : null}
        </div>
    )
}


export default ProfileAction
