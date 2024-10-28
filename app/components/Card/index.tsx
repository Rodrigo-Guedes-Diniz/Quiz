import cardStyles from "./card.module.css"

export function Card() {
    return (
        <div className={cardStyles.card}>
          <header className={cardStyles.cardHeader}>
            <h1 className={cardStyles.cardHeaderTitle}>TESTE SEU CONHECIMENTO DE F1</h1>
          </header>
          <section className={cardStyles.cardBody}>
            <p style={{marginBottom: "32px"}}>
              Lambe minha bilola
            </p>
            <p>
              FORMULARIO / BOTAO
            </p>
            <a href="/game">
            Jogar 
            </a>
          </section>
        </div>
    )
}