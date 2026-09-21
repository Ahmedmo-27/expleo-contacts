import { useParams, useNavigate } from 'react-router-dom'
import { people, WEBSITE, BASE_URL } from '../data/people'
import DetailRow from '../components/DetailRow'
import QRCodeCanvas from '../components/QRCodeCanvas'
import { IconPhone, IconBuilding, IconMail, IconLink, IconArrowLeft } from '../components/Icons'
import styles from './PersonPage.module.css'
import NotFoundPage from './NotFoundPage'

export default function PersonPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const person = people.find(p => p.id === Number(id))

  if (!person) return <NotFoundPage />

  const qrUrl = `${BASE_URL}/person/${person.id}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* TOP */}
        <div className={styles.top}>
          <p className={styles.companyLabel}>Expleo Group</p>
          <div className={styles.avatar}>{person.initials}</div>
          <h1 className={styles.name}>{person.name}</h1>
          <p className={styles.title}>{person.title}</p>
          {person.titleAr && <p className={styles.titleAr} dir="rtl">{person.titleAr}</p>}
        </div>

        {/* DETAILS */}
        <div className={styles.details}>
          <DetailRow
            icon={<IconPhone />}
            label="Mobile"
            value={
              person.mobile.includes(' - ') ? (
                <>
                  <a href={`tel:${person.mobile.split(' - ')[0].trim()}`}>{person.mobile.split(' - ')[0].trim()}</a>
                  {' - '}
                  <a href={`tel:${person.mobile.split(' - ')[1].trim()}`}>{person.mobile.split(' - ')[1].trim()}</a>
                </>
              ) : (
                person.mobile
              )
            }
            href={person.mobile.includes(' - ') ? undefined : `tel:${person.mobile}`}
          />
          {(person.companyNumber || person.companyPhone) && (
            <DetailRow
              icon={<IconBuilding />}
              label="Company Number"
              value={person.companyNumber || person.companyPhone}
              href={`tel:${(person.companyNumber || person.companyPhone).replace(/\s+/g, '')}`}
            />
          )}
          <DetailRow icon={<IconMail />}  label="Email"   value={person.email}  href={`mailto:${person.email}`} />
          <DetailRow icon={<IconLink />}  label="Website" value={WEBSITE}       href={WEBSITE} />
        </div>

        {/* QR + FOOTER */}
        <div className={styles.footer}>
          <div className={styles.qrBlock}>
            <p className={styles.qrHint}>Share this card</p>
            <QRCodeCanvas url={qrUrl} size={100} downloadName={person.name.split(' ')[0]} />
          </div>
        </div>

      </div>
    </div>
  )
}
