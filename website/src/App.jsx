import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Store from './components/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route exact path='/store' element={<Store />} />
    </Routes>
  );
}

export default App;
