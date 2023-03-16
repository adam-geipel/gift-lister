
import Connections from '../components/connections/connections';
import UserDetails from '../components/userDetails/userDetails';
import WishList from '../components/wishList/wishList';
import styles from '../page.module.css'

export default async function Page() {
   
    return (
        <>
            <main className={styles.main}>
                <UserDetails/>
                <WishList/>
                <Connections/>
            </main>
        </>
    )         
}