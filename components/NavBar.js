import Image from 'next/image'
import styles from "../styles/nav.module.css"

export default function NavBar(props) {
    return (
        <nav className={`${styles.navList} ${styles[props.color]}`}>
            <ul>
                <li><a href="">Advantages</a></li>
                <li><a href="">Roadmap</a></li>
                <li> 
                    <div className={styles.gridLogo}>
                        <Image src="/hodla-logo-black.svg" alt="logo" width="84" height="38" />
                    </div>
                </li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Join Us</a></li>
            </ul>
        </nav>
    )
}