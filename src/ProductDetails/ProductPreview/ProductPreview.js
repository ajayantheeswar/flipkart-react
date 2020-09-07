import React from 'react'
import classes from './ProductPreview.module.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Images from '../../Assets/Images';
import axios from '../../Store/Interceptor';
import { withRouter } from 'react-router';

import './ProductPreviewMain.css'

const config = {
    axis : 'vertical',
    width : '470px',
    height : '500px',
    thumbWidth : 'auto',
}

const addToCart = (product,successFunc,errFunc) => {
    axios.post('/user/add-to-cart',{
        cartItem : {
            productID : product._id,
            price : product.pricing.currentPrice,
            quantity : 1
        }
    }).then(successFunc).catch(errFunc)
}


const ProductPreview = props => {
    return (
        <div className={classes['product-preview']}>
            <Carousel {...config}>
                { props.product.imageURLs.length > 0 ?  props.product.imageURLs.map((ele,i) => (
                    <div  style={{backgroundColor :'white'}} key={i}>
                        <img className={'ProductPreview-Image--container'}  src={ele} alt={'imga'} />
                    </div>
                )) : 
                <div>
                    <img src={Images.NoImg} alt={'imga'} />
                </div>}
            </Carousel>
            <div className={classes['preview-action']}>
                {props.isAuth ? <button className={classes['atoc']}
                    onClick={() => addToCart(props.product,
                                            (response) => props.history.push('/cart') , 
                                            (err) => console.log(err) )}>Add to cart</button>
                 : <p className={classes['need-login']}>{'Login to Purchase'}</p>}
            </div>
        </div>
    )
}

export default withRouter(ProductPreview)
