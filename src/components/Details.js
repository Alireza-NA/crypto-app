import axios from 'axios';
import React,{useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// Style
import styles from '../Styles/Details.module.scss'
// Icon 
import spinner from '../assets/spinner.gif';
import git from '../assets/git.svg';
import reddit from '../assets/reddit.svg';
import search from '../assets/search.svg';
import rank from '../assets/rank.svg';
//API
const DETAIL_URL = 'https://api.coingecko.com/api/v3/coins/';

const Details = () => {
    
    const params = useParams();
    const id = params.id;
    const [data , setData] = useState([]);
    const obj = Object.keys(data).length;
    
    useEffect(()=> {
        const fetchAPI = () =>{
            axios.get(`${DETAIL_URL}${id}`)
            .then(response=> setData(response.data));
        }
        fetchAPI();
    },[id]); 
    return (
        <>
        { obj ?  
            <section className={styles.section_container}>
                <div className={styles.details_container}>
                    <div className={styles.header}>
                        <span className={styles.logo}>
                            <img src={data?.image?.small} alt='coin-img'/>
                        </span>
                        <span className={styles.names}>
                            <h1>{data.name}</h1>
                            <span>({data.symbol})</span>
                        </span>
                        <span className={styles.price}>
                            <h1>$ {data?.market_data?.current_price?.usd.toLocaleString()}</h1>
                        </span>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <span>{data?.coingecko_rank}</span>  
                            <i>
                                <img src={rank} className={styles.icon}/>
                            </i>
                        </div>
                        <div className={styles.item}>
                            <span><a href={data?.links?.blockchain_site[0]}>{data.name}</a> </span>
                            <i>
                                <img src={search} className={styles.icon}/>
                            </i>
                        </div>

                        <div className={styles.item}>
                            <span><a href={data?.links?.subreddit_url}>reddit</a> </span>
                            <i>
                                <img src={reddit}/>
                            </i>
                        </div>

                        <div className={styles.item}>
                            <span><a href={data?.links?.repos_url?.github[0]}>github</a> </span>
                            <i>
                                <img src={git}/>
                            </i>
                        </div>
                    </div>
                    
                    <div className={styles.market_data}>
                        <div >
                            <span>change 24h:{data?.market_data?.price_change_24h_in_currency?.usd.toFixed(2)}</span>
                        </div>
                        <div>
                            <span>total : {data?.market_data?.total_supply}</span>
                        </div>
                        <div>
                            <span>market Cap : {data?.market_data?.market_cap?.usd.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div className={styles.description}>
                        <p>{data?.description?.en}</p>
                    </div>
                </div>
            </section>
            : <span className={styles.loader}>
                <img src={spinner} alt='spinner'/>
                <h1>Loading ...</h1>
            </span>
            }
            
        </>
    );
};

export default Details;