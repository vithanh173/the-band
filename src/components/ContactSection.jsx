import React from 'react';
import clsx from 'clsx';
import { CiLocationOn } from 'react-icons/ci';
import { ImMobile } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import styles from '../scss/styles.module.scss';

function ContactSection() {
    return (
        <div id="contact" className={styles.content_section}>
            <h1 className={styles.section_heading}>CONTACT</h1>
            <p className={styles.section_sub_heading}>Fan? Drop a note!</p>
            <div className={clsx(styles.contact_body)}>
                <div className={clsx(styles.contact_infor)}>
                    <span>
                        <CiLocationOn className="" />
                        <p>Chicago, US</p>
                    </span>
                    <span>
                        <ImMobile className="" />
                        <p>Phone: <a href="">+00 151515</a></p>
                    </span>
                    <span>
                        <AiOutlineMail className="" />
                        <p>Email: <a href="">mail@mail.com</a></p>
                    </span>
                </div>
                <div className={clsx(styles.contact_control)}>
                    <div className={clsx(styles.contact_input)}>
                        <input type="text" placeholder="Name" className={clsx(styles.input_name)} />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" placeholder="Message" className={clsx(styles.input_message)} />
                        <button className="">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
