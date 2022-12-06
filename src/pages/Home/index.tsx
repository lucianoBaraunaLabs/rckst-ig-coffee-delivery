import { Card } from '../../components/Card'

export function Home() {
  return (
    <>
      <main>
        <header>banner aqui dentro</header>
        <section className="container">
          <h3>Nossos cafés</h3>
          <Card variation="row" />
          <br />
          <br />
          <br />
          <Card />
        </section>
      </main>
    </>
  )
}
