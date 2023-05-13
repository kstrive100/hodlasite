import Image from 'next/image'
import styles from "@/styles/stakersFrontPage.module.css"
import { formula } from '@/utils/fonts'

export default function StakersFrontPage() {
    return (
        <div className={styles.main}>
            <div className={`${styles.mainTitle} ${formula.className}`}>
                <p className={styles.firstLayer}>Stake</p>
                <p className={styles.firstLayer}>any</p>
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