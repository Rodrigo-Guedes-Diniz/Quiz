// a extensão JSX significa que o conteúdo é o HTML do React

import Link from 'next/link'
import pageStyles from './page.module.css'
import { title } from 'process'
import {Card} from "./components/Card"
import {Footer} from "./components/Footer"

export default function Page() {

  // LOGO DO QUIZ
  // CARD PEDINDO O NOME
  // FOOTER

    return (
      <main className={pageStyles.screen} style={{flex: 1}}>
        <section className={pageStyles.container}>
          <div 
        style={{ 
            display: "flex", 
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
          <h1>F1 QUIZ!</h1>
        </div>

        <Card
          headerTitle="TESTE SEU CONHECIMENTO DE F1"
        >
        <p>
          Lambe minha bilola
        </p>
        <p>
          FORMULARIO / BOTAO
          <br />
          <Link href="/game">
          Jogar 
        </Link>
        </p>
        
        </Card>
        <Footer></Footer>

        </section>
      </main>

    )
  }