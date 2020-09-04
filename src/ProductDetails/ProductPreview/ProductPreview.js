import React from 'react'
import classes from './ProductPreview.module.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Images from '../../Assets/Images';
import axios from '../../Store/Interceptor';

const config = {
    axis : 'vertical',
    width : '470px',
    height : '500px',
    thumbWidth : 'auto'
}

const addToCart = (product) => {
    axios.post('/user/add-to-cart',{
        cartItem : {
            productID : product._id,
            price : product.pricing.currentPrice,
            quantity : 1
        }
    })
}


const ProductPreview = props => {
    return (
        <div className={classes['product-preview']}>
            <Carousel {...config}>
                { props.product.imageURLs.length > 0 ?  props.product.imageURLs.map((ele,i) => (
                    <div style={{width : 'auto' , backgroundColor :'white'}} key={i}>
                        <img style={{width : 'auto' , backgroundColor :'white'}} src={ele} alt={'imga'} />
                    </div>
                )) : 
                <div>
                    <img src={Images.NoImg} alt={'imga'} />
                </div>}
            </Carousel>
            <div className={classes['preview-action']}>
                {props.isAuth ? <button className={classes['atoc']}
                    onClick={() => addToCart(props.product)}>Add to cart</button>
                 : <p className={classes['need-login']}>{'Login to Purchase'}</p>}
            </div>
        </div>
    )
}

export default ProductPreview
