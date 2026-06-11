import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'
import styles from './QRCodeCanvas.module.css'

export default function QRCodeCanvas({ url, size = 100, downloadName }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, url, {
      width: size,
      margin: 1,
      color: {
        dark: '#2D1B6B',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
  }, [url, size])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = downloadName ? `${downloadName}-qr.png` : 'qr-code.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <canvas ref={canvasRef} />
      </div>
      {downloadName && (
        <button className={styles.downloadBtn} onClick={handleDownload} title="Download QR Code">
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Save QR
        </button>
      )}
    </div>
  )
}
