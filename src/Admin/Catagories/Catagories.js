import React, { Component } from 'react'
import classes from './Catagories.module.css'
import ActionHead from '../UI/ActionHead/ActionHead'
import MenuHead from '../UI/MenuHead/MenuHead'
import AddCatagories from './AddCatagories/AddCatagories'


export class Catagories extends Component {
    render() {
        return (
            <div className={classes['catagories-containter']}>
                <ActionHead>Catagories</ActionHead>
                <MenuHead></MenuHead>
                <hr/>
                <div className={classes['action-box']}>
                    <AddCatagories />
                </div>
            </div>
        )
    }
}



export default Catagories
