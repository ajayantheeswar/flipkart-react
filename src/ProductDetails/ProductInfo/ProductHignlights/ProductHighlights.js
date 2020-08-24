import React from 'react'
import classes from './ProductHighlights.module.css'

const ProductHighlights = props => {

    const highlightsEx = [
        '8 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.26 cm (6.4 inch) Full HD+ Display',
        '48MP + 12MP + 5MP + 5MP | 32MP Front Camera',
        '4000 mAh Lithium-ion Battery',
        'Exynos 9611 Processor'
    ]

    const highlights = props.highlights || highlightsEx;

    return (
        <div className={classes['product-highlights']}>
            <p>Highlights</p>
            <ul>
                {highlights.map ((ele,index) => 
                    (<li key={index}>{ele}</li>))}
            </ul>
        </div>
    )
}

export default ProductHighlights
