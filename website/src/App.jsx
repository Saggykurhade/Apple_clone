import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Store from './components/Store';
import IPhone15Pro from './components/IPhone15Pro';
import Cart from './components/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route exact path='/store' element={<Store />} />
      <Route exact path='/IPhone15Pro' element={<IPhone15Pro />} />
      <Route exact path='/Cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
