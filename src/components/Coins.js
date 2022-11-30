import React , {useEffect , useState} from 'react';
//Styles 
import styles from '../Styles/Coins.module.scss';

//API
import { getCoin } from '../service/api';

// Component (shared)
import Coin from './shared/Coin'

// spinner
import spinner from '../assets/spinner.gif'


const Coins = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch]= useState("");

    useEffect(()=>{
        const fetchAPI = async () =>{
            const data = await getCoin();
            console.log(coins);
            setCoins (data) ;
            console.log(data);
        }
        fetchAPI();
    } ,[]);
    
    
    const searchHandler = event=>{
        setSearch(event.target.value);
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.input_container}>
                    <input type="text" placeholder='Search' value={search} onChange={searchHandler} ></input>
                </div>  
                <div className={styles.coin_container}>
                {
                    coins.length ? 
                    searchCoins.map(coin => <Coin 
                        key = {coin.id}
                        id = {coin.id}
                        symbol = {coin.symbol}
                        name = {coin.name }
                        price = {coin.current_price}
                        market_cap = {coin.market_cap}
                        img = {coin.image}
                        rank = {coin.market_cap_rank}
                        /> )
                    : 
                    <div className={styles.spinner}>
                        <img src={spinner} alt='spinner' />
                        <h1>Loading ... </h1>
                    </div>
                }
                </div>
            </section>
        </main >
    );
    
};

export default Coins;