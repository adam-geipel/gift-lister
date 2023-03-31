'use client'

import { Suspense } from 'react';
import styles from '../globals.css'
import { useSession } from 'next-auth/react';

const Page = async () => {
    const {data, status} = useSession();
    
    return (
        <>
            <main className={styles.main}>
                <Suspense fallback={<p>Loading profile...</p>}> 
                    <UserDetails user={data?.user?} />
                </Suspense>
            </main>
        </>
    )    
}

export default Page;