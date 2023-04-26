import Image from 'next/image'
import styles from "@/styles/firstBlock.module.css"
import localFont from 'next/font/local';
import Grad from '@/utils/gradient'

const formula = localFont({ src: '../public/fonts/formulacondensed-bold-webfont.woff2' })

export default function FirstBlock() {
    return (
        <div className={styles.main}>
            <div className={`${styles.mainTitle} ${formula.className}`}>
                <p className={styles.firstLayer}>Stake</p>
                <p className={styles.firstLayer}>a<span className={styles.grad1}>ny</span></p>
                <p className={styles.secondLayer}>token in</p>
                <p className={styles.thirdLayer}>1-click!</p>
            </div>
            <div className={styles.waitlist}>
                <p className={styles.waitlistText}>Manage your crypto investments and get the best yield</p>
                <div className={styles.waitlistForm}>
                    <p> Join our waitlist</p>
                    <div className={styles.waitlistLogos}>
                        <div className={`${styles.waitlistLinks} ${styles.telegramLayer}`}>
                            <Image src="/telegram-icon.svg" alt="logo" width="32" height="32" />
                        </div>
                        <div className={`${styles.waitlistLinks} ${styles.discordLayer}`}>
                            <Image src="/discord-icon.svg" alt="logo" width="32" height="32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}