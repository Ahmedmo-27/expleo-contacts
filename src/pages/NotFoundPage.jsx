import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.sub}>That contact card doesn't exist.</p>
      <button className={styles.btn} onClick={() => navigate('/')}>
        Back to directory
      </button>
    </div>
  )
}
