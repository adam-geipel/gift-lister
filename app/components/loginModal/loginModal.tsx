'use client'

import styles from "./loginModal.module.scss";

interface LoginValues {
    username: string;
    password: string;
}
/* todo: use this to control logins:
 https://dev.to/dawnind/authentication-with-credentials-using-next-auth-and-mongodb-part-1-m38
*/

export default function LoginModal() {

    return (
        <div className={styles.loginModal}> 
            <div className={styles.header}>
                <h1>Log in to start building</h1> 
                <h1>your wish list</h1>
            </div>
            <form className={styles.form}>
                <div className={styles.field}>
                    <label>Username</label>
                    <input id="username" name="username" type="text" placeholder="Username" />    
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />    
                </div>

                <div className={styles.buttonRow}>
                    <button type="submit" className={styles.button}>Login</button>
                    <button className={styles.button}>Cancel</button>
                </div>
            </form>
        </div>
    )
}