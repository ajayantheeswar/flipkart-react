import React ,{useState} from 'react'
import classes from './AddProduct.module.css';
import ImageViewer from '../../UI/ImageViewer/ImageViewer';
import Images from '../../../Assets/Images';
import AddValueContainer from '../../UI/AddValueContainer/AddValueContainer';
import AddTechinicalSpec from './AddTechinicalSpec/AddTechinicalSpec';
import ProductSpecifications from '../../../ProductDetails/ProductInfo/ProductSpecifications/ProductSpecifications';
import Axios from 'axios';

const addProduct = (product,successFunc,errFunc) => {
    console.log(product)
    Axios
        .post('http://localhost:3002/admin/add-product',getformData(product),{
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => successFunc(response))
        .catch(err => errFunc(err))
}


const getformData = (product) => {
    const formData = new FormData();
    formData.append('productName',product.productName.value);
    formData.append('catagoryName',product.catagoryName.value);
    console.log(product.catagoryName.value);
    formData.append('description',product.descriptionName.value);
    formData.append('price',product.price.value);
    formData.append('highlights',JSON.stringify(product.highlights));
    formData.append('techincalSpecification',JSON.stringify(product.techincalSpecification));

    for (let imgs of product.images) {
        formData.append('imageFiles',imgs);
    }

    return formData;
}

const AddProduct = props => {
    const [productName, setproductName] = useState({
        value : '',
        isValid : false,
        touched : false
    })

    const [catagoryName, setcatagoryName] = useState({
        value : 'Mobiles',
        isValid : false,
        touched : false
    })

    const [images , setImages] = useState([])

    const [descriptionName, setDescription] = useState({
        value : '',
        isValid : false,
        touched : false
    })

    const [highlights , setHighlights] = useState([])

    const [techincalSpecification,setTechincalSpecification] = useState([])

    const techincalSpecificationInsert = (value) => {
        console.log(value)
        setTechincalSpecification([...techincalSpecification,value]);
    }

    const techincalSpecificationDelete = (index) => {
        setTechincalSpecification(techincalSpecification.filter((val,i) => i !== index))
    }
 
    const highlightsInsert = (value) => {
        console.log(value)
        setHighlights([...highlights,value]);
    }

    const highlightsDelete = (index) => {
        setHighlights(highlights.filter((val,i) => i !== index))
    }

    const [price, setPrice] = useState({
        value : '',
        isValid : false,
        touched : false
    })

    // Network Call Function 
    const addProductHandler = () => {
        addProduct ({productName,
                    catagoryName,
                    images,
                    descriptionName,
                    price,
                    highlights,
                    techincalSpecification},(response => {
                        if(response.data.message === 'SUCCESS'){
                            console.log('Success')
                        }
                    }),(err => {
                        console.log(err);
                    }))
    }

    return (
        <div className={classes['add-products']}>
            <div className={classes['input-element']}>
                <label>Product Name :</label>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={productName.value} 
                    onChange={(event) => setproductName({
                        value : event.target.value,
                        isValid : event.target.value !== '',
                        touched : true
                    })} />
            </div>
            <div className={classes['input-element']}>
                <label>Catagory :</label>
                <select 
                value = {catagoryName.value}
                onChange={(event) => { console.log(catagoryName.value); setcatagoryName({
                    value : event.target.value,
                    isValid : event.target.value !== '',
                    touched : true
                })}}>
                    <option value="Mobiles" selected>Mobiles</option>
                    <option value={"Tv & Applicances"}>{'Tv & Applicances'}</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Cameras">Cameras</option>
                </select>
            </div>
            <div className={classes['input-element']}>
                <label>Price :</label>
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price.value} 
                    onChange={(event) => setPrice({
                        value : event.target.value,
                        isValid : event.target.value !== '',
                        touched : true
                    })} />
            </div>
            <div className={classes['input-element']}>
                <label>Images :</label>
                <div className={classes['images-picker']}>
                    <div className={classes['image-view-container']}>
                         <ImageViewer images={images} />
                    </div>
                    <div className={classes['images-picker--choser']}>
                        <label htmlFor="filechoose" className={classes['upload']}>upload</label>
                        <input 
                            type="file" 
                            id="filechoose"
                            multiple
                            onChange={(event)=> {
                                const files = event.target.files;
                                setImages(files)
                            }} 
                            style={{display : 'none'}}  />
                    </div>
                </div>
            </div>
            <div className={classes['input-element']}>
                <label>Description :</label>
                <textarea
                    rows="5" 
                    cols="70"
                    onChange={(event) => setDescription({
                        value : event.target.value,
                        isValid : event.target.value !== '',
                        touched : true
                    })}
                    value={descriptionName.value} />
            </div>
            <div className={classes['input-element']}>
                <label>Highlights :</label>
                <AddValueContainer
                    list = {highlights}
                    onAdd={highlightsInsert}
                    onDelete={highlightsDelete} />
            </div>
            <div className={classes['input-element']}>
                <label>Technical Specification :</label>
                <AddTechinicalSpec
                    list={techincalSpecification}
                    onAdd={techincalSpecificationInsert}
                    onDelete={techincalSpecificationDelete} />
            </div>
            {techincalSpecification.length > 0 ? <ProductSpecifications 
                readeMoreOFF
                specs={techincalSpecification} /> : null}
            <div className={classes['input-element']}>
                <button
                    onClick={() => addProductHandler()}>Add Product</button>
            </div>
        </div>
    )
}
export default AddProduct
