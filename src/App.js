import { Navigate ,Route , Routes } from "react-router-dom";
//Contetxt
import CoinContextProvider from "./context/CoinContextProvider";

//Component 
import Coins from './components/Coins';
import Details from './components/Details';
function App() {
  return (
    <>
      <CoinContextProvider>
        <Routes>
          <Route path='/coins' element={<Coins />}/>
          <Route path='/coins/:id' element={<Details />}/>
          <Route path="/*" element={<Navigate to={'/coins'}/>} />
        </Routes>
      </CoinContextProvider>

    </>
  );
}

export default App;
