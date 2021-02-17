import Link from 'next/link';
import styles from './championcard.module.css';

const ChampionCard = ({ champion, isMobile, latestVersion }) => {
    return (
        <Link href={`/champions/${champion.id}`}>
            <a className={styles["card-container"]}>
                {
                    isMobile ? (
                        <div style={{ height: '75px' }}>
                            <img className={styles['card-image']} style={{ width: '75px', height: '75px' }} src={`http://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`} />
                            <div className={styles['card-border']} style={{ width: '71px', height: '71px' }} />
                        </div>
                    )
                        :
                        (
                            <div>
                                <img className={styles['card-image']} style={{ width: '150px', height: '220px', objectFit: 'cover', objectPosition: '0 0' }} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
                                <h3>{champion.name}</h3>
                                <div className={styles['card-border']} style={{ width: '146px', height: '216px' }} />
                            </div>
                        )
                }
            </a>
        </Link>);
}

export default ChampionCard;