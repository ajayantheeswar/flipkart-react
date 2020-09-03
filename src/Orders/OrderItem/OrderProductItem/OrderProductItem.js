import React from 'react'

import Images from '../../../Assets/Images/index';
import classes from './OrderProductItem.module.css';

const OrderProductItem = props => {
    const {productID,price} = props.product;
    const {delivery} = props
    console.log(props)
    return (
        <div className={classes['order-product-item']} >
            <div className={classes['product-details']}>
                <div>
                    <img src={productID.imageURLs[0] || Images.NoImg} alt='im' />
                </div>
                <div className={classes['prod-det']}>
                    <p className={classes['product-name']}>{productID.productName || 'ProdName'}</p>
                    <p>{productID.catagoryName || 'catagory'}</p>
                </div>
            </div>
            <div className={classes['delivery-details']}>
                <div>
                    <p>{price || '2000'}</p>
                </div>
                <div>
                    <p className={classes['delivery-status-'+delivery.status]}>{delivery.status || 'Delivered'}</p>
                </div>
            </div>
        </div>
        
    )
}

export default OrderProductItem
