import React, { useState } from 'react'
import classes from './AddCatagories.module.css'

const AddCatagories = props => {

    const [catagoryName, setcatagoryNam] = useState({
        value : '',
        isValid : false
    })

    const [FilterList, setFilterList] = useState({
        value : '',
        isValid : false
    })


    return (
        <div className={classes['add-products']}>
            <div className={classes['input-element']}>
                <label>Catagory Name :</label>
                <input type="text" placeholder="Catagory Name" />
            </div>
            <div className={classes['input-element']}>
                <label>Filters : </label>

            </div>
        </div>
    )
}

export default AddCatagories
