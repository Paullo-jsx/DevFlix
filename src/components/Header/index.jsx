import Hamburger from '../Hamburger'
import style from './Header.module.css'

import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className={style}>
      <h1>Logo</h1>
      <nav>
        <Link className={style.linkss} to='/'>Home</Link>
        <Link className={style.linkss} to='/pesquisar'>Pesquisar</Link>
        <Link className={style.linkss} to='/favoritos'>Favoritos</Link>
        <Hamburger/>
      </nav>
    </header>
  )
}