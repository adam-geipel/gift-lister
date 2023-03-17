'use client';
import React, { use } from 'react'
import { getUser } from '../../api/users/usersApi';
import styles from './userDetails.module.scss';
  
export default function UserDetails() {

    const user = use(getUser("foo"));

    return (
        <section className={styles.userDetails}>
            <div className={styles.card}>
                <div className={styles.row}>
                    <h3>Name</h3>
                    <p>{user.name}</p>
                </div>
                <div className={styles.row}>
                    <h3>Age</h3>
                    <p>{user.age}</p>
                </div>
                <div className={styles.row}>
                    <h3>Gender</h3>
                    <p>{user.gender}</p>
                </div>
                <div className={styles.row}>
                    <h3>Country</h3>
                    <p>{user.country}</p>
                </div>
            </div>
        </section>
    )
}
