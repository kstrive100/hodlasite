import styles from '@/styles/footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.gridLogo}>
                <Image src="/hodla-logo-white.svg" alt="logo" width="120" height="67" />
            </div>
            <h1>BUIDL/HODL</h1>
            <p>founders@hodla.org</p>
        </div>
    )
}