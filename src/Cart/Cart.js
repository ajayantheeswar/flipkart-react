import React , {useEffect,useState}from 'react'
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

import axios from '../Store/Interceptor';
import PlaceOrderForm from './PlaceOrderForm/PlaceOrderForm';

const getCart = (successFunc, errorFunc) => {
    axios.get('/user/get-cart')
        .then(response => successFunc(response))
        .catch(err => errorFunc(err))
} 

const IncCartQuantity = (prodID,successFunc,errorFunc) => {
    axios.post(`/user/inc-cart/${prodID}`)
        .then((response) => successFunc(response))
        .catch((error) => console.error(error))
}

const DecCartQuantity = (prodID,successFunc,errorFunc) => {
    axios.post(`/user/dec-cart/${prodID}`)
        .then((response) => successFunc(response))
        .catch((error) => console.error(error))
}

const removeFromCart = (prodID,successFunc,errorFunc) => {
    axios.post(`/user/remove-from-cart/${prodID}`)
        .then((response) => successFunc(response))
        .catch((error) => console.error(error))
}

const Cart = props => {

    const [cart, setcart] = useState([]);
    const [grandPrice, setgrandPrice] = useState(0);

    const [orderFormVisiblity,setOrderFormVisiblity] = useState(false);
   
    
    const setUpdatedCart = (response) => {
        setcart(response.data.cart.items);
        setgrandPrice(response.data.cart.totalPrice)
    }

    useEffect(() => {
        getCart(
            (response) => setUpdatedCart(response),
            (err) => console.error(err) )     
    }, []);

    return (
        <div className={classes['master-container']}>
            <div className={classes['cart-container']}>
                <div className={classes['cart-details']} >
                    <div className={classes['cart-head']}>
                        <h2>My Cart ({cart.length})</h2>
                    </div>
                    <div className={classes['cart-item-list']} > 
                        {cart.length > 0 ? cart.map((item,i) => <CartItem 
                            incCart = {() => {console.log(item); IncCartQuantity(item.productID._id,setUpdatedCart)}}
                            decCart = {() => DecCartQuantity(item.productID._id,setUpdatedCart)}
                            remove = {() => removeFromCart(item.productID._id,setUpdatedCart)}
                            key={i} product={item} />) : <p>The Cart is Empty !!! Continue Shopping !!!</p>}
                    </div>
                    <div className={classes['place-order']}>
                        {!orderFormVisiblity && cart.length > 0 ? <button
                           onClick={() => setOrderFormVisiblity(true)} >Place Order</button> : null}
                    </div>
                </div>
                <div className={classes['price-details']} >
                    <div  className={classes['cart-head']}>
                        <h2>Price Details</h2>
                    </div>
                    <div className={classes['cart-item-list']}>
                        <div className={classes['cart-price-row']}>
                            <p className={classes['price-head']}>Grand Total</p>
                            <p>{ 'Rs. '+grandPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
            {orderFormVisiblity && cart.length > 0 ? <PlaceOrderForm />  : null}
        </div>
    )
}

export default Cart
