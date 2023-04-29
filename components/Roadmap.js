import styles from "@/styles/roadmap.module.css"
import { formula } from '@/utils/fonts'
import Image from "next/image";

export default function Roadmap() {
    return (
        <div className={`${styles.main} ${formula.className}`}>
            <div className={styles.title}>
                <h1 className={styles.h1Yellow}>HODLA</h1>
                <h1 className={styles.h1White}>ROADMAP</h1>
            </div>
            <div>
                <Image className="roadmapLine" src='/roadmap-line.svg' alt="roadmap" width="1080" height="50" />
            </div>
        </div>
    )
}