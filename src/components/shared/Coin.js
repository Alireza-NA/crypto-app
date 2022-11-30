import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import styles from '../../Styles/Coin.module.scss';



const Coin = ({ symbol , name , price , market_cap , id , img ,rank}) => {
    return (
        <>
        <Link to={`/coins/${id}`}>
            <div className={styles.item_container}>
                <div className={styles.items}>
                    <span className={`${styles.item} ${styles.name_rank}`}>
                        <span>{rank}</span>
                        <img src={img} alt='Coin-img' />
                    </span>
                    <span className={styles.item}>{name}</span>
                    <span className={styles.item}>{symbol.toUpperCase()}</span>
                    <span className={styles.item}>{price.toLocaleString()}</span>
                </div>
            </div>
        </Link>
        </>
    );
};

export default Coin;