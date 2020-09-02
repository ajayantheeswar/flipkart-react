import React , {useState} from 'react'
import classes from './PlaceOrderForm.module.css';

import axios from '../../Store/Interceptor';
import { withRouter } from 'react-router';

const placeOrder = (deliveryDetails, successfunc , failFunc) => {
    axios.post('/user/post-order',deliveryDetails)
        .then(response => successfunc(response))
        .catch(err => console.log(err))
}

const PlaceOrderForm = props => {
    console.log(props)
    const [address,setAddress] = useState({
        value : '',
        valid : false,
        touched : true
    });
    const [phone,setPhone] = useState({
        value : '',
        valid : false,
        touched : true
    });
    const [deliveryMode,setDeliveryMode] = useState({
        value : '',
        valid : false,
        touched : true
    });

    const onPlaceOrderClick = () => {
        const deliveryDetails = {
            address : address.value,
            phone : phone.value,
            deliveryMode : deliveryMode.value
        }

        placeOrder(deliveryDetails,(res) => props.history.push('/'))

    }


    return (
        <div className={classes['order-form']}>
            <div>
                <h3>Delivery Details</h3>
            </div>
            <div>
                <div className={classes['cred__item']}>
                    <label htmlFor={'Address'}>{'Address'}</label>
                    <textarea 
                        value={address.value}
                        onChange={(event) => {
                            setAddress({
                                value : event.target.value,
                                valid : event.target.value !== '',
                                touched : true
                            })
                        }}
                        rows="4" 
                        cols="50" />
                </div>
                <div className={classes['cred__item']}>
                    <label htmlFor={'Phone number'}>{'Phone Number'}</label>
                    <input 
                        value={phone.value}
                        type="number"
                        onChange={(event) => {
                            setPhone({
                                value : event.target.value,
                                valid : event.target.value !== '',
                                touched : true
                            })
                        }}
                    />
                </div>
                <div className={classes['cred__item']}>
                    <label htmlFor={'Mode of Delivery'}>Mode of Delivery</label>
                    <select 
                        onChange={(event) => {
                            setDeliveryMode({
                                value : event.target.value,
                                valid : event.target.value !== '',
                                touched : true
                            })
                        }}
                        value={deliveryMode.value} >
                        <option value={'Cash on Delivery'}>Cash on Delivery</option>
                        <option value={'Debit Card'}>Debit Card</option>
                        <option value={'UPI'}>UPI</option>
                    </select>
                </div>
                <button
                onClick={() => onPlaceOrderClick()}>Confirm Order</button>
            </div>
        </div>
    )
}

export default withRouter(PlaceOrderForm)
