import React from 'react';
import HeaderStore from './HeaderStore';
// import Footer from './Footer';
import './apple.css';

const Store = () => {
    return (
        <div id='screen'>
            <HeaderStore />

            <div id='middle-store'>

                <div className='card-store'>
                    <span>Get ₹18000.00–₹67800.00 in credit towards iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.* </span>
                    <span>Shop iPhone {'>'}</span>
                </div>

                <div className='store-top'>
                    <div className="top-left">
                        <div><p><span>Store.</span> The best way to buy the products you love.</p></div>
                    </div>
                    <div className="top-right">
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div><i className="fa-regular fa-circle fa-2xl"></i></div>
                                <div>
                                    <div className='refer'>Need shopping help?</div>
                                    <div style={{ textAlign: 'start' }}><button className=" btn-2">ask a specialist</button></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <div><i className="fa-regular fa-circle fa-2xl"></i></div>
                                <div>
                                    <div className='refer'>Visit an Apple Store</div>
                                    <div><button className=" btn-2">find one near you {'>'}</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='slider-content '>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635" alt="" className="slide-imgs" />
                        <div>Mac</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190" alt="" className="slide-imgs" />
                        <div>iPhone</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" alt="" className="slide-imgs" />
                        <div>iPad</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208" alt="" className="slide-imgs" />
                        <div>Apple Watch</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" alt="" className="slide-imgs" />
                        <div>AirPods</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" className="slide-imgs" />
                        <div>AirTag</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" className="slide-imgs" />
                        <div>Apple TV 4k </div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" className="slide-imgs" />
                        <div>HomePod</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692803114952" alt="" className="slide-imgs" />
                        <div>Accessories</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" alt="" className="slide-imgs" />
                        <div>Apple Gift Card</div>
                    </div>
                </div>

                <div className='title'>
                    <p><span>The latest. </span>Take a look at what’s new, right now.</p>
                </div>

                <div className='content-slide'>
                    <div><div className='content-slide-start'></div></div>
                    <div ><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720471465" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watchbands-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720583186" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-pro-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1661016986712" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1683844828182" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374" alt="" className="content-slide-box" /></div>
                </div>

                <div className='title'>
                    <p><span>Help is here. </span>Whenever and however you need it.</p>
                </div>

                <div className='content-slide'>
                    <div><div className='content-slide-start'></div></div>
                    <div ><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1684946879038" alt="" className="content-slide-box-2" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1694270835539" alt="" className="content-slide-box-2" /></div>

                    <div>
                        <div className="content-slide-box-3">
                            <div ><div className="content-slide-box-vertical" /></div>
                            <div ><div src="" alt="" className="content-slide-box-vertical-two" /></div>
                        </div>
                    </div>
                </div>

                <div className='quick-link-container'>
                    <h2 className='quick-link'><span>Quick</span> Links</h2>
                    <div>
                        <button className="quick-link-btn">Order Status</button>
                        <button className="quick-link-btn">Shopping Help</button>
                        <button className="quick-link-btn">Your Saves</button>
                    </div>
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Store