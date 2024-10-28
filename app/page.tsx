// a extensão JSX significa que o conteúdo é o HTML do React

import homeStyles from './home.module.css'
import { title } from 'process'
import {Card} from "./components/Card"

export default function Page() {

  // LOGO DO QUIZ
  // CARD PEDINDO O NOME
  // FOOTER

    return (
      <main className={homeStyles.homeScreen} style={{flex: 1}}>
        <section className={homeStyles.container}>
          <div 
        style={{ 
            display: "flex", 
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
          <h1>F1 QUIZ!</h1>
        </div>        
        <Card></Card>
        <footer style={{ marginTop: "24px", fontWeight: "bold" }}>
          <p>
            Projetinho de NextJS para praticar
          </p>
        </footer>
        </section>
      </main>

    )
  }