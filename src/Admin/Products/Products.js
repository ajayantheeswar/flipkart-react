import React from 'react'
import classes from './Products.module.css';
import ActionHead from '../UI/ActionHead/ActionHead';
import MenuHead from '../UI/MenuHead/MenuHead';
import AddProduct from './AddProduct/AddProduct';

const MenuCongif = [
    {path : '/' , value : 'Add Product'},
    {path : '/' , value : 'View Products'}
]


const Products = props => {
    return (
        <div className={classes['products-container']}>
            <ActionHead>Catagories</ActionHead>
            <MenuHead config = {MenuCongif} />
            <hr/>
            <div className={classes['action-box']}>
                <AddProduct />
            </div>
        </div>
    )
}

export default Products
