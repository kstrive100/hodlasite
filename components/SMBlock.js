import { formula } from '@/utils/fonts'
import Image from 'next/image'

import styles from '@/styles/smBlock.module.css'

export default function SMBlock() {
    return (
        <div className={`${styles.main} ${formula.className}`}>
            <div className={styles.outsideAnimationContainer}>
                <div className={styles.animationContainer}>
                        <h1>join our community</h1>
                        <h1>join our community</h1>
                        <h1>join our community</h1>
                        <h1>join our community</h1>
                        <h1>join our community</h1>
                </div>
            </div>
            <div className={styles.waitlistLogos}>
                <div className={`${styles.waitlistLinks} ${styles.telegramLayer}`}>
                    <Image src="/telegram-icon.svg" alt="logo" width="120" height="120" />
                </div>
                <div className={`${styles.waitlistLinks} ${styles.discordLayer}`}>
                    <Image src="/discord-icon.svg" alt="logo" width="120" height="120" />
                </div>
            </div>
        </div>  
    )
}