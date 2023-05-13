import styles from "@/styles/navButton.module.css"
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"; 

export default function NavButton() {
    const router = useRouter()
    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => setPosition(window.scrollY))
  
        return () => {
            window.removeEventListener('scroll', () => setPosition(window.scrollY));
        }
    }, [position])

    const getStyle = () => {
        if (position > 50) {
            return styles.scrolled
        } else {
            return styles.noScroll
        }
    }

    return (
        <div className={`${styles.NavButtonMain} ${getStyle()}`}>
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