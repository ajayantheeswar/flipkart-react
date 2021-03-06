import React ,{useState} from 'react'
import classes from './DropMenu.module.css';
import DropDown from '../DropDown/DropDown';
import DropDownItem from '../DropDown/DropDownItem/DropDownItem';

const DropMenu = props => {
    const [DropDownVisiblity, setDropDownVisiblity] = useState(false)

    return (
        <div className={props.RClassName ?  props.RClassName.map(cls => classes[cls]).join(' ') : ''} 
             onMouseLeave={() => setDropDownVisiblity(false)}
             onMouseEnter={() => setDropDownVisiblity(true)}>
            <button 
                onClick={props.onClick}>{props.name}</button>
            <DropDown visible={DropDownVisiblity && props.isAuth}>
                {props.children}
            </DropDown> 
        </div>
    )
}

export default DropMenu

/*
{props.config.map(
                   ele => <DropDownItem 
                            value={ele.optionName} 
                            key={ele.optionName}
                            path={ele.path} 
                            image={ele.image} />
               )}


*/