import './Menu.css'
import {  motion } from 'framer-motion'

const variants = {
  visible :({
    opacity: 1, 
    x: 0, 
    transition: {delay : 0.3}
  }),
  initial:({
    x: -100,
  })
}

const variants2 = {
  visible :({
    opacity: 1, 
    x: 0, 
    transition: {delay : 0.3}
  }),
  initial:({
    x: 100,
  })
}

const Menu = () => {
  return (
    <div  className='menu'>
      <motion.div initial="initial" whileInView="visible" variants={variants} className="item">
        <a href='#'>
        <motion.p variants={variants}>Home</motion.p>
        </a>
        </motion.div>
      <motion.div initial="initial" whileInView="visible" variants={variants} className="item">
        <a target='_blank' href='https://www.adidas.co.in/men-shoes'>
        <motion.p variants={variants}>Men</motion.p>
        </a>
        </motion.div>
      <motion.div initial="initial" whileInView="visible" variants={variants2} className="item">
        <a target='_blank' href='https://www.adidas.co.in/women?adgroupid=75767950703&campaignid=1911283625&cm_mmc=AdieSEM_Google-_-AlwaysOn-_-Search-_--_-dv%3AeCom-_-cn%3AAlwaysOn-_-pc%3AGoogle&cm_mmc1=IN&cm_mmc2=PPC-Multiple--Multiple-Multiple-IN-EMEA-eCom-Paid_Search&gad_source=1&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-VVqA2WAk8-5EI6lrc1lKaxUhRTSvONtGk4xy4lXdgRY0dRX_I19KRoCYcwQAvD_BwE&grid=true&keyword=adidas%20women'>
        <motion.p variants={variants2}>Women</motion.p>
        </a>
        </motion.div>
      <motion.div initial="initial" whileInView="visible" variants={variants2} className="item">
        <a target='_blank' href='https://www.adidas.co.in/eoss'>
        <motion.p variants={variants2}>Sale</motion.p>
        </a>
        </motion.div>
    </div>
  )
}

export default Menu
