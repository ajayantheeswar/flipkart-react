import React , {useState,useEffect}from 'react'
import classes from './Orders.module.css';
import ActionHead from '../UI/ActionHead/ActionHead';
import MenuHead from '../UI/MenuHead/MenuHead';
import Spinner from '../../Shared/Spinner/Spinner';
import OrderItem from '../../Orders/OrderItem/OrderItem';

import axios from '../../Store/Interceptor';

const MenuCongif = [
    {path : '/' , value : 'View Orders'}
]

const getOrders = (successFunc,failFunc) => {
    axios.get('/admin/get-orders')
        .then(response => successFunc(response))
        .catch(err => failFunc(err))
}

const deliverOrder = (orderID,successFunc,failFunc) => {
    axios.post('/admin/deliver-order',{
        orderID : orderID
    })
        .then(response => successFunc(response))
        .catch(err => failFunc(err))
}

const Orders = props => {

    const [orders, setOrders] = useState([]);
   
    const updateOrders = () => getOrders((res) =>  setOrders(res.data.orders),
                                    (err) => console.log(err))

    useEffect(() => {
        updateOrders();
    },[]);

    if(!orders.length > 0){
        return  <div className={classes['orders-container']}><Spinner /></div>;
    }

    return (
        <div className={classes['products-container']}>
            <ActionHead>Orders</ActionHead>
            <MenuHead config = {MenuCongif} />
            <hr/>
            <div className={classes['action-box']}>
            {orders.map((order,i) => <OrderItem 
                                        key={i} 
                                        order={order}
                                        isAdmin
                                        setOrders={setOrders}
                                        deliverOrder={deliverOrder}
                                        />)}
            </div>
        </div>
    )
}

export default Orders