import React, { useState } from 'react';
import clsx from 'clsx';
import tours from '../data/tours';
import PlaceItem from './PlaceItem';
import Modal from './Modal';
import styles from '../scss/styles.module.scss';

function TourSection() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <React.Fragment>
            <div id="tour" class={clsx(styles.tour_section)}>
                <div class={clsx(styles.content_section)}>
                    <h2 class={clsx(styles.section_heading)}>TOUR DATES</h2>
                    <p class={clsx(styles.section_sub_heading)}>Remember to book your tickets!</p>
                    <ul class={clsx(styles.tickets_list)}>
                        <li>September <span class={clsx(styles.sold_out)}>Sold out</span></li>
                        <li>October <span class={clsx(styles.sold_out)}>Sold out</span></li>
                        <li>November <span class={clsx(styles.quantity)}>3</span></li>
                    </ul>
                    <div className={clsx(styles.place_list)}>
                        {tours.map(tour => {
                            return (
                                <PlaceItem
                                    id={tour.id}
                                    url={tour.imgUrl}
                                    place={tour.place}
                                    time={tour.time}
                                    desc={tour.description}
                                    modalOpen={modalOpen}
                                    setModalOpen={setModalOpen} />
                            )
                        })}
                    </div>
                </div>
            </div>

            <Modal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen} />
        </React.Fragment>
    )
}

export default TourSection
