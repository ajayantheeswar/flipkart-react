import React from 'react'
import classes from './CatagoriesBar.module.css';

import {menuList} from './CatagoriesStaticList';
import MenuItem from './MenuItem/MenuItem';
import DropDown from './DropDown/DropDown';

const CatagoriesBar = props => {


    return (
        <div className={classes['cat-bar-container']}>
            <div className={classes['cat-bar']} >
                <div className={classes['cat-bar-list']} >
                    {menuList.map( (li,index) => <MenuItem menuItem={li} 
                                        key={index}
                                        onMouseEnter={() => console.log('g')} 
                                        onMouseLeave={() => console.log('g')} />)}
                </div>
                <DropDown data = {"data"}/>
            </div>
        </div>
    )
}

export default CatagoriesBar
