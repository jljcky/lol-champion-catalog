import Link from 'next/link';
import styles from './championcard.module.css';

const ChampionCard = ({ champion, isMobile, latestVersion }) => {
    return (
        <Link href={`/champions/${champion.id}`}>
            <a className={styles["card-container"]}>
                {
                    isMobile ? (
                        <div style={{ height: '100px' }}>
                            <img style={{ width: '100px', height: '100px' }} src={`http://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`} />
                            <div className={styles['card-border']} style={{ width: '96px', height: '96px' }} />
                        </div>
                    )
                        :
                        (
                            <div>
                                <img style={{ width: '150px', height: '200px', objectFit: 'cover', objectPosition: '0 0' }} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
                                <h3>{champion.name}</h3>
                                <div className={styles['card-border']} style={{ width: '146px', height: '196px' }} />
                            </div>
                        )
                }
            </a>
        </Link>);
}

export default ChampionCard;