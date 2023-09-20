import {motion} from 'framer-motion'

import style from './Container.module.css'

const esvanescer = {
  hidden: { opacity: 0, x: 0, y: 0},
  enter: { opacity: 1, x: 0, y: -20 },
  exit: { opacity: 0, x: -0, y: 20 }
}

export default function Container({children}) {
  return (
    <motion.div className={style.container}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{duration: 4.5, type: 'spring'}}
      variants={esvanescer}  
    >
      {children}
    </motion.div>
  )
}