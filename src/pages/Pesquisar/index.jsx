import style from './Pesquisar.module.css'

import videos from '../../json/videos.json'

import Container from "../../components/Container";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Card from '../../components/Card';

export default function Pesquisar() {
  return (
    <>
      <Header/>
      <Container>
        <h1>Pesquisar</h1>
        <section className={style.section}>
          <Search/>
        </section>
        {
          <main className={style.main}>
            {videos.map((cards) => <Card
              key={cards.id}
              title={cards.title}
              cover={cards.cover}
              url={cards.url}
            />)}
          </main>
        }
      </Container>
    </>
  )
}