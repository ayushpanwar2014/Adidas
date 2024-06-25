import Menu from './Menu/Menu';
import './Navbar.css';
import { motion } from 'framer-motion';

const variants = {
  visible :({
    opacity: 1, 
    x: 0, 
    transition: {delay : 0.3}
  }),
  initial:({
    opacity: 0
  })
}

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <motion.div initial="initial" whileInView="visible" variants={variants} className="logo">
          <div className="image">
            <motion.img  variants={variants} src="./logo.png" alt="" />
          </div>
        </motion.div>

        <div className="search">
          <motion.div initial="initial" whileInView="visible" variants={variants} className="searchBar">
            <motion.input variants={variants} type="text" placeholder='Search...' />
          </motion.div>
        </div>

        <motion.div initial="initial" whileInView="visible" variants={variants} className="offer">
          <div className="text">
            <motion.p variants={variants} >END OF SEASON SALE</motion.p>
          </div>
        </motion.div>
      </div>
      <Menu />
    </>
  )
}

export default Navbar
