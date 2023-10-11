import React from 'react';
import { useNavigate } from 'react-router-dom';
import './headerstore.css';

const HeaderStore = () => {
  return (
    <div id='navbar-store'>
      <div id='nav-top-store'>
        <div className='apple-logo-store'>
          <i class="fa-brands fa-apple"></i>
        </div>
        <div className='middle-row-store'>
          <p>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>Entertainment</p>
          <p>Accessories</p>
          <p>Support</p>
          <p></p>
        </div>
        <div className='mg-b-store'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  )
}

export default HeaderStore