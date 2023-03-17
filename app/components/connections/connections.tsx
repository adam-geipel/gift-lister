'use client';
import React, { use } from 'react'
import Link from 'next/link'
import { getUser } from '../../api/users/usersApi';
import styles from './connections.module.scss';
import { Connection } from '../../types/connection';
export default function Connections() {

    const user = use(getUser("foo"));

    return (
        <section className={`${styles.connections}`}>
          
                { user.connections.map((connection: Connection) => {
                    return( 
                        <div key={connection.id} className={styles.card}>
                            <h1>{connection.name}<span>,&nbsp;{connection.age}</span></h1>
                            <div>
                                <Link href={`/profile?user=${connection.id}`}>View profile</Link>
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}
