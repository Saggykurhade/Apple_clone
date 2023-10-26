import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./buyphone.css";
import HeaderStore from './HeaderStore';

const BuyPhone = () => {

    const [product, setProduct] = useState([
        {
            name: "iPhone 15 Pro & iPhone 15 Pro Max",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312",
            EMI: "From $999 or $41.62/mo. for 24 mo.*"
        },
        {
            name: "iPhone 15 & iPhone 15 Plus",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290559",
            EMI: "From $799 or $33.29/mo. for 24 mo.*"
        },
        {
            name: "Phone 14 & iPhone 14 Plus",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654",
            EMI: "From $699 or $29.12/mo. for 24 mo.*"
        },
        {
            name: "iPhone 13",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1692912410963",
            EMI: "From $599 or $24.95/mo. for 24 mo.*"
        },
        {
            name: "iPhone SE",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646415838921",
            EMI: "From $429 or $17.87/mo. for 24 mo.*"
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
                    <p>Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.2</p>
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
                    <li>Shopping Guides</li>
                    <li>Ways to Save</li>
                    <li>set and support</li>
                    <li>Accessories</li>
                    <li>The iPhone Experience</li>
                </ul>
            </div>

            <div className="latest-pro-buy">
                <div className="latest-pro-head-buy">
                    <h2>All models. <span>Take your pick.</span></h2>
                </div>

                <div className="latest-pro-list-buy" onClick={() => setBuyIphone15Pro(!BuyIphone15Pro)}  >
                    {product.length &&
                        <div className='single-flx-buy'>{product.map((pro) => (
                            <div className='flexbox-buy'>
                                <h3 style={{ color: "orange", textAlign: "left", marginLeft: "30px", fontSize: "13px" }}>New</h3>
                                <h1>{pro.name}</h1>
                                <img src={pro.image} />
                                <h5>{pro.EMI} <button>Buy</button></h5>
                            </div>))}
                        </div>}
                </div>
            </div>
        </div>

    )
}

export default BuyPhone