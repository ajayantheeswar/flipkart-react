import React,{useState} from 'react'
import classes from './Orders.module.css'
import OrderItem from './OrderItem/OrderItem';

import axois from '../Store/Interceptor';
import { useEffect } from 'react';

import Spinner from '../Shared/Spinner/Spinner';


const getOrders = (successFunc,failFunc) => {
    axois.get('/user/get-orders')
        .then(response => successFunc(response))
        .catch(err => failFunc(err))
}




const cancelOrder = (orderID,successFunc,failFunc) => {
    axois.post('/user/cancel-order',{
        orderID : orderID
    }).then(successFunc)
    .catch(failFunc)
}

const Orders = props => {

    const [orders, setOrders] = useState([]);
    const [loading , setLoading] = useState(true)
    
    const updateOrders = () => {
        getOrders((res) =>  {
                setOrders(res.data.orders)
                setLoading(false);
            },(err) => console.log(err))
        
        setLoading(false)
    }

    useEffect(() => {
        updateOrders();
    },[]);

    if(loading > 0){
        return <Spinner />;
    }

    return (
        <div className={classes['orders-container']}>
            {orders.map((order,i) => <OrderItem 
                                        key={i} 
                                        order={order}
                                        setOrders={setOrders}
                                        cancelOrder={cancelOrder}/>)}
        </div>
    )
}

export default Orders
