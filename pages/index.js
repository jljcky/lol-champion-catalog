import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import ChampionCard from '../components/ChampionCard';
import {getAllChampionData} from '../lib/champions';
import { useEffect, useState } from 'react';

// splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
// loading: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
// square: 'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aatrox.png'
// passive: 'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/Anivia_P.png'
// spells: 'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/FlashFrost.png'

export default function Home({champions}) {
  // const cardWidth = 200;

  // const [catalogWidth, setCatalogWidth] = useState(0);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setCatalogWidth((Math.floor(window.innerWidth/cardWidth)-1) * cardWidth);
  //   });
  // }, []);

  return (
    <div>
      <h1>Champions</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={styles.catalog}>
            {champions.map((champion) => (
              <ChampionCard key={champion.key} champion={champion}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export const getStaticProps = async () => {
  const allChampionData = await getAllChampionData();

  return {
    props: {
      champions: allChampionData
    }
  }
}