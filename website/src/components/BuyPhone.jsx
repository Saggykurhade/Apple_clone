import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./buyphone.css";
import HeaderStore from './HeaderStore';

const BuyPhone = () => {

    const [product, setProduct] = useState([
        {
            name: "iPhone 15 Pro & iPhone 15 Pro Max",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312",
            EMI: "From ₹21483.00/mo. with instant savings§§ and No Cost EMI§ or ₹134900.00‡"
        },
        {
            name: "iPhone 15 & iPhone 15 Plus",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559",
            EMI: "From ₹12483.00/mo. with instant savings§§ and No Cost EMI§ or ₹79900.00‡"
        },
        {
            name: "Phone 14 & iPhone 14 Plus",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654",
            EMI: "From ₹10983.00/mo. with instant savings§§ and No Cost EMI§ or ₹69900.00‡"
        },
        {
            name: "iPhone 13",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692912410963",
            EMI: "From ₹9483.00/mo. with instant savings§§ and No Cost EMI§ or ₹59900.00‡"
        },
        {
            name: "iPhone SE",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
            EMI: "From ₹7983.00/mo. with instant savings§§ and No Cost EMI§ or ₹49900.00‡"
        },
        {
            name: "iPhone SE",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
            EMI: "From ₹7983.00/mo. with instant savings§§ and No Cost EMI§ or ₹49900.00‡"
        }
    ])

    const [BuyIphone15Pro, setBuyIphone15Pro] = useState(false)
    console.log(BuyIphone15Pro)
    const router = useNavigate()

    return (
        <div className='Productscreen'>

            <HeaderStore />
            <div className="discount-buy">
                <div className="dis-text-buy">
                    <h5>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</h5>
                    <a href="#">shop now</a>
                </div>
            </div>

            <div className="note-buy">
                <div className="note-flex-buy">
                    <h1>Shop iPhone</h1>
                    <div className="visit-buy">
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202305_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853" alt="" />
                        <p>Need shopping help?<br />
                            Ask a Specialist</p>
                    </div>
                </div>
            </div>

            <div className="title-buy">
                <ul>
                    <li><b><u>All Models</u></b></li>
                    <li>Festive specials</li>
                    <li>Shopping Guides</li>
                    <li>Accessories</li>
                    <li>set and support</li>
                </ul>
            </div>

            <div className="latest-pro-buy">
                <div className="latest-pro-head-buy">
                    <h2>All models. <span>Take your pick.</span> </h2>
                </div>
                <div className="latest-pro-list-buy" onClick={() => setBuyIphone15Pro(!BuyIphone15Pro)}  >
                    {product.length &&
                        <div className='single-flx-buy'>{product.map((pro) => (
                            <div className='flexbox-buy'>
                                <h3 style={{ color: "orange", textAlign: "left", marginLeft: "30px" }}>New</h3>
                                <h2>{pro.name}</h2>
                                <img src={pro.image} />
                                <h5>{pro.EMI} <button>Buy</button></h5>
                            </div>))}
                        </div>}
                </div>
            </div>

            {
                BuyIphone15Pro ? (
                    <div className='iphone-15pro-slide-buy' onClick={() => setBuyIphone15Pro(!BuyIphone15Pro)}></div>
                ) : ("")
            }
            {
                <div>
                    {
                        BuyIphone15Pro ?
                            <div className="main-box-iphone-15">
                                <div className="iphone-pro-bar">
                                    <button>iPhone 15 Pro</button>
                                </div>
                                <div>
                                    <i id='close-button' onClick={() => setBuyIphone15Pro(!BuyIphone15Pro)} class="fa-solid fa-xmark"></i>
                                </div>

                                <div className="i-phone-buy-box">
                                    <div className="iphone-flex-lft-rgt">
                                        <div className='iphone-left'>
                                            <button>iPhone 15pro</button>
                                            <img src="asset/iphone-15gray.png" alt="" />
                                        </div>


                                        <div className='iphone-right'>
                                            <div className="ipn-rgt-1">
                                                <h5>NEW</h5>
                                                <h1>IPhone-15Pro</h1>
                                                <h6>From ₹21483.00/mo.Per Month with instant savings§§<br />  and No Cost EMI§Footnote or ₹134900.00Footnote‡ <button>Buy</button></h6>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="iphone-flex-bottom">
                                        <div className="iph-flex-1-btm">
                                            <i class="fa-regular fa-credit-card" style={{ color: "#36ba1c" }}></i>
                                            <div className="emi-pay">
                                                <h4>Flexible ways to pay</h4>
                                                <h5>No Cost EMI§ and EMI◊◊ available.</h5>
                                            </div>
                                        </div>
                                        <div className="iph-flex-1-btm">

                                        </div>
                                        <div className="iph-flex-1-btm">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="sidebar-dontshow"><i id='close-button' onClick={() => setBuyIphone15Pro(!BuyIphone15Pro)} class="fa-solid fa-xmark"></i></div>
                    }
                </div>
            }
        </div>

    )
}

export default BuyPhone