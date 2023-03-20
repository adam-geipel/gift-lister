import styles from './page.module.scss'
import LoginModal from '../components/loginModal/loginModal';

export default function Page() {
  return (
    <main className={styles.main}>
      <LoginModal/>
    </main>
  )
}
