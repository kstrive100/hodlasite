import { formula } from '@/utils/fonts'
import { motion } from 'framer-motion';

import styles from '@/styles/smBlock.module.css'

export default function SMBlock() {
    return (
        <div className={`${styles.main} ${formula.className}`}>
            <div className={styles.textSlide}>
                <h1>join our community</h1>
            </div>
            <div className={styles.textSlide}>
                <h1>join our community</h1>
            </div>
        </div>  
    )
}