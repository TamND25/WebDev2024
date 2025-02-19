import React from 'react';
import styles from './postHeader.module.scss';
import addImage from '../../assets/AcademicHeader.jpg';

const PostHeader = ({ imageUrl, altText , addImageSrc = addImage, addAltText}) => {
    return (
        <div className={styles.header}>
            <img src={imageUrl} alt={altText} className={styles.logo}></img>
            {addImageSrc && <img src={addImageSrc} alt={addAltText} className={styles.additionalImage}/>}  
        </div>
    );
};

export default PostHeader;