import styles from './page.module.scss'
import LoginModal from '../components/loginModal/loginModal';

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginModal/>
    </main>
  )
}
