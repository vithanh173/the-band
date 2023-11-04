import React from 'react';
import clsx from 'clsx';
import members from '../data/members';
import MemberItem from './MemberItem';
import styles from '../scss/styles.module.scss';

function IntroduceSection() {
    return (
        <div id="band" className={clsx(styles.content_section)}>
            <h2 className={clsx(styles.section_heading)}>THE BAND</h2>
            <p className={clsx(styles.section_sub_heading)}>We love music</p>
            <p className={clsx(styles.about_text)}>
                We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={clsx(styles.member_list)}>
                {members.map(member => {
                    return (
                        <MemberItem
                            id={member.id}
                            name={member.name}
                            url={member.imgUrl} />
                    )
                })}
            </div>
        </div>
    )
}

export default IntroduceSection
