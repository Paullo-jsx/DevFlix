import style from './Card.module.css'

export default function Card({ title, url, cover }) {
  return (
    <section className={style.card}>
      <a href={url} target="_blank"><img src={cover} alt="Capa do Vídeo do YouTube no Card" /></a>
      <hr />
      <h2>{title}</h2>
      <nav>
        <p>Adicionar aos Favoritos</p>
        <button><span class="material-symbols-outlined">favorite</span></button>
      </nav>
    </section>
  )
}