import logo from './images/logo.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar/navbar.js';
import Rent from '../src/components/screens/rent.js'
import Sell from '../src/components/screens/sell.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Rent />} />
            <Route path='/sell' element={<Sell />} />
            <Route path='/buy' element={<Rent />} />
            <Route path='/rent' element={<Rent />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
