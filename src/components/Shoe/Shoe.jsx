import { useState } from 'react'
import { motion } from 'framer-motion';
import './Shoe.css'

const variants = {
    visible :({
      opacity: 1, 
      x: 0, 
    }),
    initial:({
      opacity: 0
    })
  }

const Shoe = () => {

    const [img1,setImg1] = useState(true);
    const [img2,setImg2] = useState(true);
    const [img3,setImg3] = useState(true);

    return (
        <>
            <section>
                <motion.div initial="initial" transition={{delay : .2}} whileInView="visible" variants={variants} className="product" >
                    <motion.img variants={variants}  src={img1 ? "./shoe1.jpg" : "./shoe2.avif"} alt="" className="productImg" />
                    <motion.div variants={variants} className="productDetails">
                        <h1 className="productTitle">YEEZY BOOST 700 V2</h1>
                        <h2 className="productPrice">₹23 999.00</h2>
                        <p  className="productDesc">The YEEZY BOOST 700 V2 Tephra features an upper composed of beige textile/canvas and premium leather with beige nubuck and suede overlays, with reflective details throughout. The full-length drop in boost midsole provides comfort and stability.</p>

                        <div className="colors">
                            <div style={{backgroundColor : "orange"}} className="color" onClick={() => setImg1(true)}></div>
                            <div style={{backgroundColor : "gray"}} className="color" onClick={() => setImg1(false)}></div>
                        </div>

                        <div className="sizes">
                            <div className="size">UK 6</div>
                            <div className="size">UK 7</div>
                            <div className="size">UK 8</div>
                        </div>

                        <button className="productButton">Buy Now !</button>
                    </motion.div>
                </motion.div>
            </section>
            
            <section>
                <motion.div initial="initial" transition={{delay : .2}} whileInView="visible" variants={variants} className="product" >
                    <motion.img  variants={variants} src={img2 ? "./shoe3.avif" : "./shoe4.avif"} alt="" className="productImg" />
                    <motion.div variants={variants} className="productDetails">
                        <h1 variants={variants} className="productTitle">GAZELLE SHOES</h1>
                        <h2 variants={variants} className="productPrice">₹11 999.00</h2>
                        <p variants={variants} className="productDesc">Bold and unapologetic, these statement-making adidas Gazelle shoes are sure to turn some heads. Inspired by the dynamic vitality of the digital world, this striking version puts an exciting spin on the beloved look. A smooth leather upper and plush inner lining add durability and comfort to the sophisticated design, while unique triple branding on the outsole adds a playful edge. Slip these on and show the world your creative side.</p>

                        <div className="colors">
                            <div style={{backgroundColor : "white"}} className="color" onClick={() => setImg2(true)}></div>
                            <div style={{backgroundColor : "cyan"}} className="color" onClick={() => setImg2(false)}></div>
                        </div>

                        <div className="sizes">
                            <div className="size">UK 6</div>
                            <div className="size">UK 7</div>
                            <div className="size">UK 8</div>
                        </div>

                        <button className="productButton">Buy Now !</button>
                    </motion.div>
                </motion.div>
            </section>

            <section>
                <motion.div initial="initial" transition={{delay : .2}} whileInView="visible" variants={variants} className="product" >
                    <motion.img variants={variants}  src={img3 ? "./shoe5.avif" : "./shoe6.avif"} alt="" className="productImg" />
                    <motion.div  variants={variants} className="productDetails">
                        <h1 className="productTitle">GAZELLE BOLD SHOES</h1>
                        <h2 className="productPrice">₹11 999.00</h2>
                        <p className="productDesc">Your favourite casual sneaker is back and reimagined. These adidas Gazelle shoes take your everyday style and kick it up a notch. First made as training shoes in the '60s, and now an iconic lifestyle staple, the Gazelle seamlessly transitions from day to night. Premium suede and leather wrap your feet in retro comfort, while the signature rubber cupsole provides a soft stride. Terry cloth lines the heel tab, adding a vintage feel for extra nostalgia. This pair's clean lines and minimal aesthetic make a maximum impact. Slip on a pair and step into a classic.</p>

                        <div className="colors">
                            <div style={{backgroundColor : "red"}} className="color" onClick={() => setImg3(true)}></div>
                            <div style={{backgroundColor : "lightblue"}} className="color" onClick={() => setImg3(false)}></div>
                        </div>

                        <div className="sizes">
                            <div className="size">UK 6</div>
                            <div className="size">UK 7</div>
                            <div className="size">UK 8</div>
                        </div>

                        <button className="productButton">Buy Now !</button>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default Shoe
