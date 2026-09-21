import { useNavigate } from 'react-router-dom'
import QRCodeCanvas from './QRCodeCanvas'
import { IconPhone, IconBuilding, IconMail, IconLink, IconChevronRight } from './Icons'
import { BASE_URL } from '../data/people'
import styles from './ContactCard.module.css'

export default function ContactCard({ person }) {
  const navigate = useNavigate()
  const url = `${BASE_URL}/person/${person.id}`

  return (
    <article className={styles.card} onClick={() => navigate(`/person/${person.id}`)}>
      <div className={styles.glow} />
      <div className={styles.accent} />

      <div className={styles.body}>
        <div className={styles.titleGroup}>
          <p className={styles.role}>{person.title}</p>
          {person.titleAr && <p className={styles.roleAr} dir="rtl">{person.titleAr}</p>}
        </div>
        <h2 className={styles.name}>{person.name}</h2>

        <ul className={styles.infoList}>
          <li className={styles.infoRow}>
            <IconPhone />
            <span>{person.mobile}</span>
          </li>
          {(person.companyPhone || person.companyNumber) && (
            <li className={styles.infoRow}>
              <IconBuilding />
              <span>{person.companyPhone || person.companyNumber}</span>
            </li>
          )}
          <li className={styles.infoRow}>
            <IconMail />
            <span>{person.email}</span>
          </li>
          <li className={styles.infoRow}>
            <IconLink />
            <span>expleo.com/global/en/</span>
          </li>
        </ul>
      </div>

      <div className={styles.qrSection} onClick={e => e.stopPropagation()}>
        <QRCodeCanvas url={url} size={88} downloadName={person.name.split(' ')[0]} />
        <div className={styles.qrLabel}>
          <strong>QR Code #{person.id}</strong>
          <p>Scan to open this contact card on any device.</p>
          <span
            className={styles.viewLink}
            onClick={e => { e.stopPropagation(); navigate(`/person/${person.id}`); }}
          >
            View page <IconChevronRight />
          </span>
        </div>
      </div>
    </article>
  )
}
