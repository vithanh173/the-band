import React from 'react';
import clsx from 'clsx';
import { FaFacebookF } from 'react-icons/fa';
import { TfiInstagram } from 'react-icons/tfi';
import { FaSnapchat, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styles from '../scss/styles.module.scss';

function Foot() {
    return (
        <div className={clsx(styles.footer)}>
            <div className={clsx(styles.social_icons)}>
                <a href="#">
                    <FaFacebookF />
                </a>
                <a href="#">
                    <TfiInstagram />
                </a>
                <a href="#">
                    <FaSnapchat />
                </a>
                <a href="#">
                    <FaPinterestP />
                </a>
                <a href="#">
                    <FaTwitter />
                </a>
                <a href="#">
                    <FaLinkedinIn />
                </a>
            </div>
            <p className="">&copy; Copyright 2023</p>
        </div>
    )
}

export default Foot
