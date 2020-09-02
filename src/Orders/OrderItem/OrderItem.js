import React from 'react'
import classes from './OrderItem.module.css';
import OrderProductItem from './OrderProductItem/OrderProductItem';



const OrderItem = props => {
    return (
        <div className={classes['order-item']}>
            <OrderProductItem />
        </div>
    )
}

export default OrderItem
