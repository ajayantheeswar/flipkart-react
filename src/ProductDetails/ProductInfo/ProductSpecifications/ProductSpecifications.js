import React, { useState } from 'react'
import classes from './ProductSpecifications.module.css'

const Spec = [
    {
        title : "General",
        list : [
            {
                key : "Model Number",
                value : "SM-A515FZK2INS/ SM-A515FZKHINS"
            },
            {
                key : "Color",
                value :"Galaxy A51"
            },
            {
                key : "Browse Type" ,
                value : "Smartphones"
            },
            {
                key : "Model Number",
                value : "SM-A515FZK2INS/ SM-A515FZKHINS"
            },
        ]
    }
    
]


const getSpectList = (catagory) => {
    // General
    const values = []
    for(let ele of catagory) {
        let ans = 
        (<li className={classes['spec-item']}>
            <p className={classes['spec-item--key']}>{ele.key}</p>
            <p className={classes['spec-item--value']}>{ele.value}</p>
        </li>)
        values.push(ans);
    }
    return (
        <ul className={classes['spec-body-group']}>
            {values}
        </ul>
    )
}


const ProductSpecifications = props => {

    console.log(props)

    const spects = props.specs || Spec;
    const specsList = []
    for(let specCat of spects){
        let ans  = (
            <div className={classes['spec-cat']}>
                <h3>{specCat.title}</h3>
                {getSpectList(specCat.list)}
            </div>
        )
        specsList.push(ans)
    }

    console.log(spects);

    const [ReadMore, setReadMore] = useState(!props.readeMoreOFF)

    const mainClass = !ReadMore ? [classes['product-specification'],classes['expand']].join(' ') : classes['product-specification'] 
    return (
        <div>
            <div className={mainClass}>
                <div className={classes['header']}>
                    <h2>Specifications</h2>
                </div>
                {
                    specsList
                }
                
            </div>
            {ReadMore ? (
                    <div className={classes['read-more']} onClick = { () => setReadMore(!ReadMore)}> 
                        <p>Read More</p>
                    </div>
                ) : null}
        </div>
        
    )
}

export default ProductSpecifications
