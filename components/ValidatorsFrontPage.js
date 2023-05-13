import Image from 'next/image'
import styles from "@/styles/validatorsFrontPage.module.css"
import { formula } from '@/utils/fonts'

export default function ValidatorsFrontPage() {
    return (
        <div className={styles.main}>
            <div className={`${styles.mainTitle} ${formula.className}`}>
                <p className={styles.firstLayer}>Get</p>
                <p className={styles.firstLayer}>delegations</p>
                <p className={styles.secondLayer}>in any chain </p>
                <p className={styles.thirdLayer}>in 1-click!</p>
            </div>
            <div className={styles.form}>
                <p className={styles.formText}>Maximize your acquisition efficiency</p>
                <div className={styles.contactButton}>
                    Contact us
                </div>
            </div>
        </div>
    )
}