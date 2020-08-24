import React from 'react'
import classes from './ProductPreview.module.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Images from '../../Assets/Images';

const config = {
    axis : 'vertical',
    width : '470px'
}


const ProductPreview = props => {
    return (
        <div className={classes['product-preview']}>
            <div>
                <Carousel {...config}>
                    <div>
                        <img src={Images.NoImg} alt={'imga'} />
                    </div>
                    <div>
                        <img src={Images.NoImg} alt={'imga'} />
                    </div>
                    <div>
                        <img src={Images.NoImg} alt={'imga'} />
                    </div>
                    <div>
                        <img src={Images.NoImg} alt={'imga'} />
                    </div>
                    <div>
                        <img src={Images.NoImg} alt={'imga'} />
                    </div>
                </Carousel>
                <div className={classes['preview-action']}>
                    <button className={classes['atoc']}>Add to cart</button>
                    <button className={classes['buy']}>Buy Now</button>
                </div>
            </div> 
        </div>
    )
}

export default ProductPreview
