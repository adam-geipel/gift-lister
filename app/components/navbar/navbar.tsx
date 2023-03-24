'use client'

import Link from 'next/link';
import navbarStyles from './navbar.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
    
    const { data, status } = useSession();

    const loggedIn = (status === 'authenticated');

    return (
        <>
            <header className={navbarStyles.navbar}>
                <div className={navbarStyles.header}>
                    <h1>Gift Lister</h1>
                    <h3>A little gift list aggregator</h3>
                </div> 
                    <>
                <div className={navbarStyles.links}>
                
                    <ul>
                    {loggedIn ? (
                        <>
                        <li>
                            <Link href="/profile">My Profile</Link>
                        </li>
                        <li>
                            <Link href="/users">Find Friends</Link>
                        </li>
                        <li>
                            <div onClick={() => signOut({callbackUrl: 'http://localhost:3000/login'})}>
                            <Link href="/login">Sign Out</Link>
                            </div>
                        </li>
                        </> 
                        ) : (
                        <>
                        <li>
                            <div onClick={() => signIn('google')}>
                                <Link href="/login">Log in</Link>
                            </div>
                        </li>
                        </>
                    )}
                    </ul>
           
                </div>
                </>
            </header>
        </>
    )
}