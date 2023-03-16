'use client';
import React, { use } from 'react'
import Link from 'next/link'
import getUser from '../../api/users/usersApi';


export default function Connections() {

    const user = use(getUser("foo"));

    return (
        <section>
            <ul>
                { user.connections.map((connection) => {
                    return( 
                        <li key={connection.id}>
                            <h1>
                                {connection.name}
                            </h1>
                            <div>
                                {connection.age}
                            </div>
                            <div>
                                <Link href={`/profile?user=${connection.id}`}>View profile</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
