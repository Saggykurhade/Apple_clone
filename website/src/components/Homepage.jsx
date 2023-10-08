import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './apple.css';

const Homepage = () => {
  return (
    <div id='screen'>
      <Header />

      <div id='middle'>

        <div className='card'>
          <span>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</span>
          <span>Shop now {'>'}</span>
        </div>

        <div className='iphone15pro'>
          <div>
            <h3>iPhone 15 Pro</h3>
            <span>Titanium.So Strong.So light.So Pro</span>
            <p>Learn more {'>'} Buy {'>'}</p>
          </div>
        </div>

        <div className='iphone15'>
          <div>
            <h3>iPhone 15</h3>
            <span>New camera.New design.Newphoria</span>
            <p>Learn more {'>'} Buy {'>'}</p>
          </div>
        </div>

        <div className='watch'>
        <div>
            <h3>Watch</h3>
            <span>New camera.New design.Newphoria</span>
            <p>Learn more {'>'} Buy {'>'}</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Homepage