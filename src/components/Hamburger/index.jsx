import style from './Hamburger.module.css'

import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variant = {
  hidden: { opacity: 1, x: 0, y: -20 },
  enter: { opacity: 1, x: -10, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 }
}

export default function Hamburger() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={style.button} onClick={() => (setOpen(!open))}><span class="material-symbols-outlined">menu</span></button>
      {open && (
        <AnimatePresence
          exit="exit"
          variants={variant}
        >
          <motion.main className={style.container_hamburger}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variant}
            transition={{ duration: .4, type: "spring" }}
          >
            <div className={style.menu_itens}>
              <Link to="/">Home</Link>
              <Link to='/pesquisar'>Pesquisar</Link>
              <Link to="/favoritos">Favoritos</Link>
            </div>
          </motion.main>
        </AnimatePresence>
      )}
    </>
  )
}