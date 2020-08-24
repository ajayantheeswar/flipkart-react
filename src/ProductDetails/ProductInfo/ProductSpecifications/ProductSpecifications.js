import React from 'react'
import classes from './ProductSpecifications.module.css'

const Spec = {
    "General" : {
        "Model Number" :" SM-A515FZK2INS/ SM-A515FZKHINS",
        "Model Name" : "Galaxy A51",
        "Color" : "Prism Crush Black",
        "Browse Type" : "Smartphones",
    },
    "Display Features" : {
        "Model Number" :" SM-A515FZK2INS/ SM-A515FZKHINS",
        "Model Name" : "Galaxy A51",
        "Color" : "Prism Crush Black",
        "Browse Type" : "Smartphones",
    },
    "Os & Processor Features" : {
        "Model Number" :" SM-A515FZK2INS/ SM-A515FZKHINS",
        "Model Name" : "Galaxy A51",
        "Color" : "Prism Crush Black",
        "Browse Type" : "Smartphones",
    },
    "Memory & Storage Features" : {
        "Model Number" :" SM-A515FZK2INS/ SM-A515FZKHINS",
        "Model Name" : "Galaxy A51",
        "Color" : "Prism Crush Black",
        "Browse Type" : "Smartphones",
    },
    "Camera Features" : {
        "Model Number" :" SM-A515FZK2INS/ SM-A515FZKHINS",
        "Model Name" : "Galaxy A51",
        "Color" : "Prism Crush Black",
        "Browse Type" : "Smartphones",
    },
    "Call Features" : {
        "Model Number" :" SM-A515FZK2INS/ SM-A515FZKHINS",
        "Model Name" : "Galaxy A51",
        "Color" : "Prism Crush Black",
        "Browse Type" : "Smartphones",
    }
}


const getSpectList = (catagory) => {
    // General
    const values = []
    for(let key in catagory) {
        let ans = 
        (<li className={classes['spec-item']}>
            <p className={classes['spec-item--key']}>{key}</p>
            <p className={classes['spec-item--value']}>{catagory[key]}</p>
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

    const spects = props.specs || Spec;

    const specsList = []

    for(let specCat in spects){
        let ans  = (
            <div className={classes['spec-cat']}>
                <h3>{specCat}</h3>
                {getSpectList(spects[specCat])}
            </div>
        )
        specsList.push(ans)
    }

    return (
        <div className={classes['product-specification']}>
            <div className={classes['header']}>
                <h2>Specification</h2>
            </div>
            {
                specsList
            }
        </div>
    )
}

export default ProductSpecifications
