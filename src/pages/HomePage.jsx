import ContactCard from '../components/ContactCard'
import { people } from '../data/people'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Expleo Group · Egypt</p>
        <h1 className={styles.headline}>
          Leadership<br />Contact Directory
        </h1>
        <p className={styles.sub}>
          Scan any QR code to open a shareable digital contact card with full details and a direct website link.
        </p>
      </header>

      <main className={styles.grid}>
        {people.map((person, i) => (
          <div
            key={person.id}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ContactCard person={person} />
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        © Expleo Group Egypt · Leadership Contact Cards
      </footer>
    </div>
  )
}
