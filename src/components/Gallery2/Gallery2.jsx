import './Gallery2.css'
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

const Gallery2 = () => {
  return (
    <div className='border'>

    <div className='gallery2'>
        <image>
            <motion.div initial="initial" transition={{delay : .4}} whileInView="visible" variants={variants} className="p1">
                <motion.img variants={variants} src="./p4.jpg" alt="" />
            </motion.div>
            <motion.div initial="initial" transition={{delay : .3}} whileInView="visible" variants={variants} className="p2">
                <motion.img variants={variants} src="./p1.jpg" alt="" />
            </motion.div>
            <motion.div initial="initial" transition={{delay : .2}} whileInView="visible" variants={variants} className="p3">
                <motion.img variants={variants} src="./p3.jpg" alt="" />
            </motion.div>
            
        </image>
    </div>
    </div>
  )
}

export default Gallery2
