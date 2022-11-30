import React,{ useState , useEffect , createContext } from 'react';

//Api
import {getCoin} from '../service/api'
export const CoinContext = createContext();

const CoinContextProvider = ({children}) => {

    const [coinData , setCoinData] =useState([]);
    useEffect (()=>{
        const fetchAPI = async ()=> {
            setCoinData(await getCoin());
        }
        fetchAPI();
    },[])

    return (
        <CoinContext.Provider value={coinData}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;