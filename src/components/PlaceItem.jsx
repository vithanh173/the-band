import React, { useState } from 'react'
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function PlaceItem({ id, url, place, time, desc, modalOpen, setModalOpen }) {

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <div key={id}>
            <img src={url} alt={place} className={clsx(styles.place_img)} />
            <div className={clsx(styles.place_body)}>
                <h3 className={clsx(styles.place_heading)}>{place}</h3>
                <p className={clsx(styles.place_time)}>{time}</p>
                <p className={clsx(styles.place_desc)}>{desc}</p>
                <button
                    className={clsx(styles.buy_btn)}
                    onClick={handleModalOpen}>
                    Buy Tickets</button>
            </div>
        </div >
    )
}

export default PlaceItem
