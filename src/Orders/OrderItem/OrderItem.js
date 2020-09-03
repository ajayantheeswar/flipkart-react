import React from 'react'
import classes from './OrderItem.module.css';
import OrderProductItem from './OrderProductItem/OrderProductItem';

const OrderItem = props => {
    return (
        <div className={classes['order-item-container']}>
            <div className={classes['order-item']}>
                {props.order.products.map((product,i) => <OrderProductItem key={i} product={product} delivery={props.order.delivery} />)}
            </div>
            <div className={classes['order-delvery-details']}>
                <div className={classes['order-delivery-address']}>
                    <h3>Address : </h3>
                    <p>{props.order.delivery.address}</p>
                </div>
            </div>
            <div className={classes['class-div']}>
                { !props.isAdmin && props.order.delivery.status === "APPROVED" ? <button 
                        onClick={() => props.cancelOrder(props.order._id,
                        (res) => props.setOrders(res.data.orders),
                        (err) => console.log(err))}
                className={classes['cancel-button']}>Cancel Order</button> : null}

                { props.isAdmin && props.order.delivery.status === "APPROVED" ? <button 
                        onClick={() => props.deliverOrder(props.order._id,
                        (res) => props.setOrders(res.data.orders),
                        (err) => console.log(err))}
                        className={classes['cancel-button']} style={{backgroundColor: 'green'}}>Deliver</button> : null}
            </div>
        </div>
           
        
    )
}

export default OrderItem
