
import Connections from '../components/connections/connections';
import UserDetails from '../components/userDetails/userDetails';
import WishList from '../components/wishList/wishList';
import styles from '../page.module.css'

export default async function Page() {
   
    return (
        <>
            <main className={styles.main}>
                <h1>Bio</h1>
                <UserDetails/>
                <h1>Wish List</h1>
                <WishList/>
                <h1>Connections</h1>
                <Connections/>
            </main>
        </>
    )         
}