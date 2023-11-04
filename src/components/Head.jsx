import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function Head() {

    const [openNav, setOpenNav] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);

    const handleOpenNav = () => {
        setOpenNav(!openNav);
        if (openNav) {
            document.querySelector("header").style.height = "auto";
        }
        else {
            document.querySelector("header").style.height = null;
        }
    }

    const handleOpenSubMenu = (e) => {
        e.preventDefault();
        setOpenSubMenu(!openSubMenu);
    }

    return (
        <React.Fragment>
            <header className={clsx(styles.header)}>
                <ul className={clsx(styles.nav)}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#band">Band</a></li>
                    <li><a href="#tour">Tour</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a href="#"
                            onClick={handleOpenSubMenu}>
                            More
                            <i className={clsx(styles.arrow_down)}><AiOutlineDown /></i>
                        </a>
                        <ul className={clsx(styles.subnav, { [styles.sub_open]: openSubMenu })}>
                            <li><a href="#">Merchandise</a></li>
                            <li><a href="#">Extras</a></li>
                            <li><a href="#">Media</a></li>
                        </ul>
                    </li>
                </ul>
                <div className={clsx(styles.search)}>
                    <i className={clsx(styles.icon)}><AiOutlineSearch /></i>
                </div>

                <div className={clsx(styles.mobile_menu)}
                    onClick={handleOpenNav}>
                    <i className={clsx(styles.icon)}><AiOutlineMenu /></i>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Head