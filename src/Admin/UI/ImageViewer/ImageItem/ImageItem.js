import React ,{useState} from 'react'
import classes from './ImageItem.module.css';
import Images from '../../../../Assets/Images';

const ImageItem = props => {

    const [image, setImage] = useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(props.image);
    
    reader.onload = (event) => {
        setImage(event.target.result);
    }

    return (
        <div className={classes['image-container']}>
            {image ? <img src={image} alt='imdage' />  : null }
        </div>
        
    )
}

export default ImageItem
