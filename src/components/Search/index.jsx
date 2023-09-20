import style from './Search.module.css'

export default function Search() {
  return (
    <>
     <input type="search" placeholder="Pesquisar..." className={style.input}/> 
    </>
  )
}