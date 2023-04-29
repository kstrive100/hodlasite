import styles from "@/styles/secondBlock.module.css"
import { formula } from '@/utils/fonts'

export default function SecondBlock() {
    return (
        <div className={styles.main}>
            <div className={styles.firstRowTitle}>
                <h1 className={formula.className}>No-brainer native staking</h1>
            </div>
            <div className={styles.secondRow}>
                <div>
                    <hr />
                    <h3>Stake</h3>
                    <p>Choose any network, connect your wallet and stake</p>
                </div>
                <div>
                    <hr />
                    <h3>Analyze</h3>
                    <p>Manage your wide portfolio, explore new tokens in order to maximise your yield</p>
                </div>
                <div>
                    <hr />
                    <h3>Auto Claim</h3>
                    <p>We will collect your rewards automatically, no need to waste your time</p>
                </div>
            </div>
        </div>
    )
}