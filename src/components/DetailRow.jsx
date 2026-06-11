import styles from './DetailRow.module.css'

export default function DetailRow({ icon, label, value, href }) {
  return (
    <div className={styles.row}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>
          {href ? (
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      </div>
    </div>
  )
}
