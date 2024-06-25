import './Gallery.css'
import { motion } from 'framer-motion';

const variants = {
    visible :({
      opacity: 1, 
      x: 0, 
    }),
    initial:({
      opacity: 0
    })
  }

const Gallery = () => {
  return (
    <div className='gallery'>
        <image>
            <motion.div initial="initial" transition={{delay : .2}} whileInView="visible" variants={variants} className="people1">
                <motion.img variants={variants}   src="./people1.jpg" alt="" />
            </motion.div>
            <motion.div initial="initial" transition={{delay : .3}} whileInView="visible" variants={variants} className="people2">
                <motion.img variants={variants}  src="./people5.jpg" alt="" />
            </motion.div>
            <motion.div initial="initial" transition={{delay : .4}} whileInView="visible" variants={variants} className="people3">
                <motion.img variants={variants} src="./people3.jpg" alt="" />
            </motion.div>
            <motion.div initial="initial" transition={{delay : .5}} whileInView="visible" variants={variants} className="people4">
                <motion.img variants={variants} src="./people4.jpg" alt="" />
            </motion.div>
        </image>
    </div>
  )
}

export default Gallery
