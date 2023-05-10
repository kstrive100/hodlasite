import styles from "@/styles/roadmap.module.css"
import { formula } from '@/utils/fonts'
import Image from "next/image";

export default function Roadmap() {
    return (
        <div className={styles.main}>
            <div className={styles.itemsContainer}>
            <div className={`${styles.title} ${formula.className}`}>
                <h1 className={styles.h1Yellow}>HODLA</h1>
                <h1 className={styles.h1White}>ROADMAP</h1>
            </div>
            <table className={styles.timeLine}>
                <thead>
                    <tr>
                        <td className={styles.firstCol}></td>
                        <td className={styles.secondCol}>May</td>
                        <td className={styles.thirdCol}>June</td>
                        <td className={styles.fourthCol}>July</td>
                        <td className={styles.fifthCol}>August</td>
                        <td className={styles.sixthCol}>September</td>
                        <td className={styles.seventhCol}></td>                    
                    </tr>
                </thead>

                <tbody>
                    <tr className={styles.roadmapLine}>
                        <td colspan="7"> <Image src='/roadmap-line.svg' alt="roadmap" width={1080} height={50} /> </td>
                    </tr>

                    <tr className={styles.features}>
                        <td className={styles.featuresTitle}>Features</td>
                        <td>MVP launch with cross-chain/wallet analytics</td>
                        <td>Validator diversification</td>
                        <td></td>
                        <td>Auto-claiming and auto-compound</td>
                        <td>Validator monitoring</td>
                        <td>Keep buidling</td>
                    </tr>

                    <tr className={styles.networks}>
                        <td className={styles.networksTitle}>Networks</td>
                        <td>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/solana-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Solana</span>
                            </div>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/cosmos-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Cosmos</span>
                            </div>
                        </td>
                        <td>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/polygon-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Polygon</span>
                            </div>
                        </td>
                        <td>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/avalanche-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Avalanche</span>
                            </div>
                        </td>
                        <td>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/ethereum-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Ethereum</span>
                            </div>
                        </td>
                        <td>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/tezos-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Tezos</span>
                            </div>
                            <div className={styles.networksContainer}>
                                <Image src='/icons/polkadot-icon.svg' alt="avalanche-icon" width={24} height={24} />
                                <span>Polkadot</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}