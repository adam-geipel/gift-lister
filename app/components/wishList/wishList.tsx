'use client';
import React, { use } from 'react'
import Link from 'next/link'
import getUser from '../../api/users/usersApi';


export default function WishList() {

    const user = use(getUser("foo"));

    return (
        <section>
            <ul>
                { user.wishList.map((gift, iter) => {
                    return( 
                        <li key={iter}>
                            <h1>
                                {gift.title}
                            </h1>
                            <div>
                                {gift.description}
                            </div>
                            <div>
                                Find it <Link href={gift.storeUrl}>here</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
