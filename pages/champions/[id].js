import Link from 'next/link';
import {getAllChampionIds, getChampionData} from '../../lib/champions';

const Champion = ({champion}) => {
    return ( 
    <div>
        <Link href="/">
            <a>
                <h4>Back</h4>
            </a>
        </Link>
        <h1>{champion.name}</h1>
        <h2>{champion.title}</h2>
        <p>{champion.lore}</p>
    </div> );
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