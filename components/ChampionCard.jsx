import Link from 'next/link';
import styles from './championcard.module.css';

const ChampionCard = ({ champion }) => {
    return (
        <Link href={`/champions/${champion.id}`}>
            <a className={styles["card-container"]}>
                <div>
                    <img style={{ width: '150px', height: '200px', objectFit: 'cover', objectPosition: '0 0' }} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
                    <h2>{champion.name}</h2>
                </div>
            </a>
        </Link>);
}

export default ChampionCard;