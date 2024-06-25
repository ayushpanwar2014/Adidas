import './Welcome.css'
import { motion } from 'framer-motion'

const variants = {
  visible :({
    opacity: 1, 
    x: 0, 
  }),
  initial:({
    opacity: 0
  })
}

const Welcome = () => {
  return (
    <div className='welcome'>
      <motion.div initial="initial" transition={{delay : .2}} whileInView="visible" variants={variants} className="welcomeImage">
        <motion.img variants={variants}  src="./logo1.jpg" alt="" />
      </motion.div>
    </div>
  )
}

export default Welcome
