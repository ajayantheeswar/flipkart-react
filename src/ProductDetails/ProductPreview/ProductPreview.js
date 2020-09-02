import React from 'react'
import classes from './ProductPreview.module.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Images from '../../Assets/Images';
import axios from '../../Store/Interceptor';

const config = {
    axis : 'vertical',
    width : '470px'
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
                    <div key={i}>
                        <img src={ele} alt={'imga'} />
                    </div>
                )) : 
                <div>
                    <img src={Images.NoImg} alt={'imga'} />
                </div>}
            </Carousel>
            <div className={classes['preview-action']}>
                <button className={classes['atoc']}
                    onClick={() => addToCart(props.product)}>Add to cart</button>
                <button className={classes['buy']}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductPreview
