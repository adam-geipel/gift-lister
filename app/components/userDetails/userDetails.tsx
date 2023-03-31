'use client';

import React from 'react';
import styles from './userDetails.module.scss';
import 'react-country-dropdown/dist/index.css';

const UserDetails = async (user : any) => {

    return (
        <section className={styles.userDetails}>
            <h1>Bio</h1>
            <div className={styles.card} id="userBioCard">
                <div hidden>
                    <label>ID</label>
                    <p id="id">{user.email}</p>
                </div>
                <div className={styles.row}>
                    <label>Name</label>
                    <p>{user.name}</p>
                </div>
                <div className={styles.row}>
                    <label>Email</label>
                    <p>{user.email}</p>
                </div>
                <div className={styles.row}>
                    <label>Birthday</label>
                    <p>{user.birthday}</p>
                </div>
                <div className={styles.row}>
                    <label>Gender</label>
                    <p>{user.gender}</p>
                </div>
                <div className={styles.row}>
                    <label>Country</label>
                    <p>{user.country}</p>
                </div>                       
            </div>
        </section>
    )
}

export default UserDetails;