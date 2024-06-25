import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <>

    <div className="features">
                <div className="feature">
                    <img src="./shipping1.png" alt="" className="featureIcon"/>
                    <span className="featureTitle">FREE SHIPPING</span>
                    <span className="featuredDesc">Worldwide shipping on all orders.</span>
                </div>
                <div className="feature">
                    <img src="./30return.png" alt="" className="featureIcon"/>
                    <span className="featureTitle">30 DAYS RETURN</span>
                    <span className="featuredDesc">No question return and easy refund in 14 days.</span>
                </div>
                <div className="feature">
                    <img src="./giftCard.png" alt="" className="featureIcon"/>
                    <span className="featureTitle">GIFT CARDS</span>
                    <span className="featuredDesc">Buy gift cards and use coupon codes easily.</span>
                </div>
                <div className="feature">
                    <img src="./ContactUs.png" alt="" className="featureIcon"/>
                    <span className="featureTitle">CONTACT US!</span>
                    <span className="featuredDesc">Keep in touch via email and support system.</span>
                </div>
        </div>
      
    </>
  )
}

export default Feature
