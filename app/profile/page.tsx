import styles from '../page.module.css'

export default function Profile() {
    var userName = 'New User';

    return (
            <main className={styles.main}>
                <div>
                    <h>Welcome {userName}</h>
                </div>
            </main>
    )
}