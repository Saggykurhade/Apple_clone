import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Store from './components/Store';
import IPhone15Pro from './components/IPhone15Pro';
import Cart from './components/Cart';
import BuyPhone from './components/BuyPhone';
import BuyIphone15Pro from './components/BuyIphone15Pro';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route exact path='/store' element={<Store />} />
      <Route exact path='/IPhone15Pro' element={<IPhone15Pro />} />
      <Route exact path='/Cart' element={<Cart />} />
      < Route exact path='BuyPhone' element={<BuyPhone />} />
      <Route exact path='BuyIphone15pro' element={<BuyIphone15Pro />} />
    </Routes>
  );
}

export default App;
