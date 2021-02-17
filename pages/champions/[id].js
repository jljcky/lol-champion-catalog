import Link from 'next/link';
import { useState } from 'react';
import {getAllChampionIds, getChampionData} from '../../lib/champions';

const Champion = ({champion}) => {
    const [skinIndex, setSkinNum] = useState(0);

    return ( 
        <div>
            <Link href="/">
                <a>
                    <h4>Back</h4>
                </a>
            </Link>
            <div>
                <img style={{width: '100%'}} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${champion.skins[skinIndex].num}.jpg`} />
                <button style={{position: 'absolute', width: '10%', left: 0}} onClick={() => setSkinNum(skinIndex-1 < 0 ? champion.skins.length-1 : skinIndex-1)}>left</button>
                <button style={{position: 'absolute', width: '10%', right: 0}} onClick={() => setSkinNum(skinIndex+1 >= champion.skins.length ? 0 : skinIndex+1)}>right</button>
            </div>
            <h1>{skinIndex ? champion.skins[skinIndex].name : champion.name}</h1>
            <h2>{champion.title}</h2>
            <p>{champion.lore}</p>
            <div>
                <h2>{champion.passive.name}</h2>
                <p dangerouslySetInnerHTML={{__html: champion.passive.description}}/>
            </div>
            {
                champion.spells.map((spell) => (
                    <div key={spell.id}>
                        <h2>{spell.name}</h2>
                        <p dangerouslySetInnerHTML={{__html: spell.description}}/>
                    </div>
                ))
            }
        </div> 
    );
}
 
export default Champion;

export const getStaticPaths = async () => {
    const paths = await getAllChampionIds();
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const champion = await getChampionData(params.id);
    return {
      props: {
          champion
      }
    }
  }