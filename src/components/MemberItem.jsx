import React from 'react'
import clsx from 'clsx';
import styles from '../scss/_content.module.scss';

function MemberItem({ id, name, url }) {
    return (
        <div key={id}
            className={clsx(styles.member_item)}>
            <p className="">{name}</p>
            <img src={url}
                alt="Member"
                className={clsx(styles.member_img)} />
        </div>
    )
}

export default MemberItem
