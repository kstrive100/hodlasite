import styles from "@/styles/navButton.module.css"
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function NavButton() {
    const router = useRouter()
    console.log(router)
    return (
        <div className={styles.main}>
            <div className={styles.stakers}
            id={router.pathname == "/" ? styles.activeStakers : ''}>
                <Link href="/" >Stakers</Link>
            </div>
            <div className={styles.validators} 
            id={router.pathname == "/validators" ? styles.activeValidators : ''}>
                <Link href="/validators">Validators</Link>
            </div>
        </div>
    )
}