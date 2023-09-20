import style from './Home.module.css'

import Container from "../../components/Container";
import Header from "../../components/Header";

import videos from '../../../src/json/videos.json'
import Card from "../../components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Home</h1>
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