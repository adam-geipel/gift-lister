'use client'

import Link from 'next/link';
import { signOut } from 'next-auth/react'
import navbarStyles from './navbar.module.scss';

export default function Navbar() {
    return (
        <>
            <header className={navbarStyles.navbar}>
                <div className={navbarStyles.header}>
                    <h1>Gift Lister</h1>
                    <h3>A little gift list aggregator</h3>
                </div> 
                <div className={navbarStyles.links}>
                    <ul>
                        <li>
                            <Link href="/profile">My Profile</Link>
                        </li>
                        <li>
                            <Link href="/users">Find Friends</Link>
                        </li>
                    </ul>
                </div>
                <div className={navbarStyles.logoutArea}>
                    <button onClick={() => signOut({callbackUrl: 'http://localhost:3000/login'})}>Sign Out</button>
                </div>
            </header>
        </>
    )
}