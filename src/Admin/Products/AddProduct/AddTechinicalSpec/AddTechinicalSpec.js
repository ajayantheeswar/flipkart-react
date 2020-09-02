import React , {useState} from 'react'
import classes from './AddTechinicalSpec.module.css';

const AddTechinicalSpec = props => {

    const [Title, setTitle] = useState({
        value : '',
        valid : false,
        touched : false
    })

    const [featureList , setFeatureList] = useState([])

    const [key,setKey] = useState({
        value : '',
        valid : false,
        touched : false
    })

    const [value,setValue] = useState({
        value : '',
        valid : false,
        touched : false
    })

    const featureListAdd = (feature) => {
        setFeatureList([...featureList,feature])
    }
    
    const featureListDelete = (index) => {
        setFeatureList(featureList.filter((ele,i) => i !== index))
    }

    

    return (
        <div className={classes['add-value']}>
            <div className={classes['section-title']}>
                <label>Feature Title</label>
                <input 
                    value={Title.value}
                    onChange={(event) => {
                        setTitle({
                            value : event.target.value,
                            valid : event.target.value !== '',
                            touched : true
                        })
                    }} />
            </div>
            <div className={classes['section-list-input']}>
                <input 
                    placeholder="Feature Name"
                    value={key.value}
                    onChange={(event) => {
                        setKey({
                            value : event.target.value,
                            valid : event.target.value !== '',
                            touched : true
                        })
                    }} />
                <input 
                    placeholder="Feature Value"
                    value={value.value}
                    onChange={(event) => {
                        setValue({
                            value : event.target.value,
                            valid : event.target.value !== '',
                            touched : true
                        })
                    }} />
                <button
                    onClick={() => {
                        featureListAdd({
                            key : key.value,
                            value : value.value
                        })
                    }}>Add</button>
            </div>
            <ul className={classes['feature-list']}>
                {featureList.map ( (ele,index) => (
                    <div className={classes['feature-list--item']} key={index} onClick={() => featureListDelete(index)}>
                       <b>{ele.key + ' :'}</b>
                       <p>{ele.value}</p>
                    </div>
                ))}
            </ul>
            <button
                className={classes['add-feature']}
                onClick={() => props.onAdd({
                    title : Title.value,
                    list : featureList
                })}
            >Add Feature</button>
        </div>
    )
}

export default AddTechinicalSpec;
