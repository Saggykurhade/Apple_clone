import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import './iphone15pro.css';

const IPhone15Pro = () => {
    return (
        <div id='screen'>
            <Header />

            <div className='card'>
                <span>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡ </span>
                <span>Shop iPhone {'>'}</span>
            </div>

            <div id='middlepro'>

                <div className='iphone15proimg'>
                    <div>
                        <h3>iPhone 15 Pro</h3>
                        <div className='iphone15provideo'>
                            <video autoPlay loop src="https://www.apple.com/105/media/ww/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/hero/large_2x.mp4"></video>
                        </div>
                        <button className='buy-btn'>Buy</button>
                        <p>From ₹21483.00/mo.‡ or ₹134900.00*</p>
                    </div>
                </div>

                <div className='iphone15pro2'>
                    <h2>Get the highlights.</h2>
                    <span>
                        <p><pre>Watch the film <i class="fa-regular fa-circle-play"></i>    </pre></p>
                        <p>Watch the event {'>'}</p>
                    </span>
                </div>

                <div className='iphone15pro2video'>
                    <p>Titanium.<br></br>So strong. So light. So Pro.</p>
                    <video autoPlay loop src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-titanium/large_2x.mp4"></video>
                </div>

                <div className='view360'>
                    <h3>Take a closer look.</h3>
                    <img src="iphone15problue.png" alt="" />
                    <p>iPhone 15 Pro in Blue Titanium</p>
                </div>

                <div className='proimg'>
                    <h2>Explore the full story.</h2>
                    <div className='prohead'>
                        <h1>iPhone.</h1>
                        <h1>Forged in titanium.</h1>
                    </div>
                    <div>
                        <video src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/titanium/large_2x.mp4"></video>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default IPhone15Pro