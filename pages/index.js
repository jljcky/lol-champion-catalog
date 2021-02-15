import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import ChampionCard from '../components/ChampionCard';
import {getAllChampionData, getLatestVersion} from '../lib/champions';
import { useEffect, useState } from 'react';

// splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
// loading: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
// square: 'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aatrox.png'
// passive: 'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/Anivia_P.png'
// spells: 'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/FlashFrost.png'

export default function Home({champions}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>League of Legends Champion Catalog</h1>
      <input className={styles.searchbar} type="text" placeholder="Search for a Champion...." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
      <div className={styles.catalog}>
        <div className={styles['catalog-container']}>
          {champions.map((champion) => {
            if (champion.name.toLowerCase().includes(searchTerm.toLowerCase()))
              return <ChampionCard key={champion.key} champion={champion}/>
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const allChampionData = await getAllChampionData();
  // const latestVersion = await getLatestVersion();

  return {
    props: {
      champions: allChampionData
    }
  }
}