import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <div id='navbar'>
            <i class="fa-brands fa-apple"></i>
            <ul>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>Entertainment</li>
                <li>Accessories</li>
                <li>Support</li>
            </ul>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    )
}

export default Header