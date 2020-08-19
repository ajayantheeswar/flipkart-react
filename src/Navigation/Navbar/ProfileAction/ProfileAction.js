import React from 'react'
import classes from './ProfileAction.module.css';
import DropMenu from './DropMenu/DropMenu';
import {MenuConfing} from './MenuConfig';
import Images from '../../../Assets/Images';


const ProfileAction = () => {
    return (
        <div className={classes['profile-action']}>
            <DropMenu 
                name={MenuConfing.Login.Name} 
                config={MenuConfing.Login.Values}
                RClassName={['drop-menu','login']} />
            <DropMenu 
                name={'More'} 
                config={MenuConfing.Login.Values}
                RClassName={['drop-menu']} />
            <div className={classes['cart-btn']}>
                <p>Cart</p>
                <img src={Images.cart} alt='cart' />
            </div>
        </div>
    )
}


export default ProfileAction
