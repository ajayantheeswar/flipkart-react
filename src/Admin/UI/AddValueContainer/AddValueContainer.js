import React , {useState} from 'react';
import classes from './AddValueContainer.module.css'

const AddValueContainer = props => {

    const [Input, setInput] = useState({
        value : '',
        valid : false,
        touched : false
    })

    return (
        <div className={classes['add-value']}>
            <div className={classes['value-input-field']} >
                <input 
                    value={Input.value}
                    onChange={(event) => setInput({
                        value : event.target.value,
                        isValid : event.target.value !== '',
                        touched : true
                    })}
                    placeholder={props.placeholder} />
                <button 
                    onClick={() => {
                        props.onAdd(Input.value)
                        setInput({
                            value : '',
                            isValid : false,
                            touched : true
                        })
                    }}>Add</button> 
            </div>
            { props.list ? 
                <ul className={classes['value-output-field']}>
                    {props.list.map((ele,index) => (
                        <div className={classes['output-item']}>
                            <p>{ele}</p>
                            <p className={classes['exit']}
                            onClick={() => props.onDelete(index)}>X</p>
                        </div>
                    ))}
                </ul> : null}
        </div>
    )
}

export default AddValueContainer
