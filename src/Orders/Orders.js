import React from 'react'
import classes from './Orders.module.css'
import OrderItem from './OrderItem/OrderItem'

const Orders = props => {
    return (
        <div className={classes['orders-container']}>
            <OrderItem />
        </div>
    )
}

export default Orders
