// a extensão JSX significa que o conteúdo é o HTML do React

"use client";

import Link from 'next/link';
import pageStyles from './page.module.css';
import { title } from 'process';
import {Card} from "./components/Card";
import {Footer} from "./components/Footer";
import { useRouter } from 'next/navigation';
import { use } from 'react';


export default function Page() {

  // LOGO DO QUIZ
  // CARD PEDINDO O NOME
  // FOOTER

    const router = useRouter();

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
          Quantas perguntas você consegue acertar?
        </p>
        <div style={{
            margin: "24px",
          }}>
          <form
            onSubmit={() => {
              event.preventDefault();
              const name = "Rodrigo";
              router.push(`/game?player=${name}`)
            }}
          >
          <div style={{ marginBottom: "24px" }}>
            <input 
            type="text"
            placeholder="Diz aí seu nome pra jogar :)"
            name="playerName"
            />
          </div>
          
          <button>
            Jogar
          </button>
          
          
        </form>
        </div>
        </Card>
        <Footer></Footer>

        </section>
      </main>

    )
  }