import React from 'react'
import classes from './CartItem.module.css';

import Images from '../../Assets/Images/index';
import QuantitySelector from '../../Shared/QuantitySelector/QuantitySelector';
 

const CartItem = props => {

    console.log(props)
    return (
        <div className={classes['cart-item']}>
            <div className={classes['prod-details']}>
                <div className={classes['prod-image']}>
                    <img src={(props.product.productID.imageURLs)[0] || Images.NoImg}  alt="prod"/>
                </div>
                <div>
                    <h3>{props.product.productID.productName || 'Product name'}</h3>
                    <p>({'Qty : ' + ( props.product.quantity|| 2)})</p>
                </div>
                <div>
                    <h2>{'₹ ' + (props.product.subTotal || '20000')}</h2>
                </div>
            </div>
            <div className={classes['prod-actions']}>
                <QuantitySelector 
                    qty={props.product.quantity}
                    sub={props.decCart}
                    add={props.incCart} />
                <div>
                    <button
                        onClick={props.remove} 
                    >Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
