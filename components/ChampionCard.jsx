import Link from 'next/link';
import styles from './championcard.module.css';

const ChampionCard = ({ champion }) => {
    return (
        <Link href={`/champions/${champion.id}`}>
            <a className={styles["card-container"]}>
                <div>
                    <img style={{ width: '200px' }} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
                    <h4>{champion.name}</h4>
                </div>
            </a>
        </Link>);
}

export default ChampionCard;