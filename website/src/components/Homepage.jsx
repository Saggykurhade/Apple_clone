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
            <h3>WATCH</h3>
            <p>SERIES 9</p>
            <span>Smarter.Brighter.Mightier.</span>
            <p>Learn more {'>'} Buy {'>'}</p>
          </div>
        </div>

        <div className='wrap-container'>
          <div className='wrap-content'>
            <h1>iPad Pro</h1>
            <div className='img-container'>Supercharged by <img style={{ width: '15px' }} src="https://www.apple.com/v/home/be/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_small_2x.png" alt="" />
            </div>
            <p>Learn more {'>'} Buy {'>'}</p>
          </div>

          <div className='wrap-content-2'>
            <div>
              <div><img style={{ width: '65px', marginLeft: '110px' }} src="https://www.apple.com/v/home/be/images/logos/apple-vision-pro/promo_logo_apple_vision_pro__90zi46p7dc2y_medium_2x.png" alt="" /></div>
              <div>
                <h3>Welcome to the era of spatial computing</h3>
              </div>
              <p>Available early next year in the U.S</p>
              <div>
                <p>Learn more {'>'} Buy {'>'}</p>
              </div>
            </div>
          </div>

          <div className='wrap-content-3'>
            <div >
              <h1>MacBook Air 15"</h1>
              <div><p>Impressively big Impossibly thin.</p></div>
              <p>Learn more {'>'} Buy {'>'}</p>
            </div>
          </div>

          <div className='wrap-content-4'>
            <div >
              <h1>AirPods Pro</h1>
              <div><p>Adaptive Audio. Now Playing.</p></div>
              <p>Learn more {'>'} Buy {'>'}</p>
            </div>
          </div>

          <div className='wrap-content-5'>
            <div>
              <div><img style={{ width: '65px', marginLeft: '110px' }} src="https://www.apple.com/v/home/be/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_small_2x.png" alt="" /></div>
              <div className='content-wrap-5'><p>Upgrade and save.It's that easy.</p></div>
              <p>Learn more {'>'} Buy {'>'}</p>
            </div>
          </div>

          <div className='wrap-content-6'>
            <div>
              <h1>HomePod mini</h1>
              <p>Learn more {'>'} Buy {'>'}</p>
            </div>
          </div>
        </div>

        <div className='slider-content-home'>
          <div className='slider-content-box-home'>
            <div><img src="img-1.png" alt="" id='img-1' /></div>
            <div><img src="img-2.png" alt="" id="img-2" /></div>
            <div><img src="img-3.png" alt="" id='img-3' /></div>
            <div><img src="img-4.png" alt="" id='img-4' /></div>
          </div>
          <div className='slide-btn-home'>
            <a href="#img-1"><i class="fa-solid fa-circle"></i></a>
            <a href="#img-2"><i class="fa-solid fa-circle"></i></a>
            <a href="#img-3"><i class="fa-solid fa-circle"></i></a>
            <a href="#img-4"><i class="fa-solid fa-circle"></i></a>
          </div>
        </div>
        
        <div className='home-foot-text'>
          <div className='home-footer'>
            <p>*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards<br /> and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for<br /> up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction<br /> value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated,<br /> and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without<br /> any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders<br /> cannot be combined for instant savings.</p><br />
            <p>A subscription is required for Apple TV+.</p>
          </div>
          <div className="horizontal-line"></div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Homepage