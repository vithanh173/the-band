import React from 'react';
import { BsTicketDetailed, BsPerson } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function Modal({ modalOpen, setModalOpen }) {

    const handleModalClose = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <React.Fragment>
            <div className={modalOpen === true ? clsx(styles.overlay, styles.overlay_appear) : clsx(styles.overlay)}>
                <div className={modalOpen === true ? clsx(styles.modal, styles.modal_open) : clsx(styles.modal)}>
                    <div className={clsx(styles.modal_head)}>
                        <i> <BsTicketDetailed /></i>
                        Tickets
                        <div
                            className={clsx(styles.close)}
                            onClick={handleModalClose}>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className={clsx(styles.modal_content)}>
                        <span>
                            <i><AiOutlineShoppingCart /></i>
                            Tickets, $15 per person
                        </span>
                        <input type="text" />
                        <span>
                            <i> <BsPerson /></i>
                            Send To
                        </span>
                        <input type="text" />
                        <button>PAY</button>
                    </div>
                    <div className={clsx(styles.modal_foot)}>
                        <p>Need <a href="" className="">help?</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Modal
