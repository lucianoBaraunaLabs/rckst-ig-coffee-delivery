export function Home() {
  return (
    <>
      <main>
        <header>banner aqui dentro</header>
        <section className="container">
          <h3>Nossos cafés</h3>
          <article>
            <p>Expresso Tradicional</p>
            <span>tradicional</span>
            <span>com leite</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <p>R$ 9,90</p>
            <input type="number" min={1} />
            <button>Adicionar ao carrinho</button>
          </article>
        </section>
      </main>
    </>
  )
}
