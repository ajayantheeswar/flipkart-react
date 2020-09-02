import React from 'react'

import Images from '../../../Assets/Images/index';
import classes from './OrderProductItem.module.css';

const OrderProductItem = props => {
    return (
        <div className={classes['order-product-item']} >
            <div className={classes['product-details']}>
                <div >
                    <img src={Images.NoImg} alt='im' />
                </div>
                <div className={classes['prod-det']}>
                    <p className={classes['product-name']}>{props.prodName || 'ProdName'}</p>
                    <p>{props.catagory || 'catagory'}</p>
                </div>
            </div>
            <div className={classes['delivery-details']}>
                <div>
                    <p>{props.price || '2000'}</p>
                </div>
                <div>
                    <p>{props.delivery || 'Delivered'}</p>
                </div>
            </div>
        </div>
        
    )
}

export default OrderProductItem
