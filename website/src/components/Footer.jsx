import React from 'react';
import './footer.css';

const Footer = () => {
  const listTitles = ['Shop and Learn','Apple Wallet','Account','Entertainment','Apple Store','For Business','For Education', 'For Healthcare','Apple Values','About Apple'];

  const listItems = [['Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','AirTag','Accessories','Gift Cards'],  ['Wallet'],['Manage Your Apple ID','Apple Store Account','iCloud.com'],['Apple One','Apple TV+','Apple Music','Apple Arcade','Apple Podcasts','Apple Books','App Store'],['Find a Store','Genius Bar','Today at Apple','Apple Camp','Apple Trade In','Ways to Buy','Recycling Programme','Order Status','Shopping Help'],['Apple and Business','Shop for Business'],['Apple and Education','Shop for Education','Shop for University'],['Apple in Healthcare','Health on Apple Watch'],['Accessibility','Education','Environment','Privacy','Supplier Responsiblity'],['Newsroom','Apple Leadership','Career Opportunities','Investors','Ethics & Complaince','Events','Contact Apple']]
  return (
    <div className='footer-container'>
      <div className='footer-lists-container'>
        {
          listTitles.map((title,i) => <div className='footer-single-list-container'><h5>{title}</h5>{listItems[i].map(item => <p>{item}</p>)}</div>)
        }
      </div>
      <br/>
      <p className='footer-text'>More ways to shop: <span className='blue-link'>Find an Apple Store</span> or <span className='blue-link'>other retailer</span> near you. Or call 000800 040 1966.</p>
      <hr className='footer-hr-1'/>
      <div className='footer-bottom-div footer-text'>
        <p >Copyright © 2023 Apple Inc. All rights reserved</p>
        <ul >
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sales Policy</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
        <span>India</span>
      </div>
      <br/>
    </div>
  )
}

export default Footer