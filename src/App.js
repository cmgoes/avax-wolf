import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import Minting from './components/minting';
import MintingWolf from './components/mintwolf';
import Staking from './components/staking';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/minting" element={<Minting/>} />  
        <Route path="/mint-wolf" element={<MintingWolf/>} />   
        <Route path="/staking" element={<Staking/>} />                
      </Routes>
    </Router>
  );
}

export default App;
