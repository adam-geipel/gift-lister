'use client'

import styles from './page.module.scss'
import { signIn } from "next-auth/react";

export default function Page() {

  
  const status = async () => signIn('google');

  return (
    <main className={styles.main}>
      <div className={styles.loginModal}> 
        <div className={styles.header}>
            <h1>Log in to start building</h1> 
            <h1>your wish list</h1>
        </div>
        
        <div className={styles.buttonRow}>
            <button className={styles.button} onClick={signIn}>Log in with Google</button>
            <button className={styles.button}>Cancel</button>
        </div>
    
      </div>
    </main>
  )
}
