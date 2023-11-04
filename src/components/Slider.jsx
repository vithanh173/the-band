import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import images from '../data/images';
import styles from '../scss/_slider.module.scss';

const currentIndex = 0
function Slider() {

    let id;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }

    const autoSlide = () => {
        id = setInterval(nextImage, 5000);
    }

    useEffect(() => {
        setCurrentIndex(0);
    }, [])

    useEffect(() => {
        autoSlide();
        return () => clearInterval(id);
    }, [currentIndex])

    return (
        <div className={clsx(styles.slider)}>
            {images.map((image, index) => {
                return index === currentIndex && (
                    <div className={index === currentIndex ? clsx(styles.slide, styles.current) : clsx(styles.slide)}>
                        <img src={image.imgUrl} alt={image.place} />
                        <div className={clsx(styles.text_content)}>
                            <h2 className={clsx(styles.text_heading)}>{image.place}</h2>
                            <p className={clsx(styles.text_description)}>{image.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
