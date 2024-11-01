"use client";

import Link from "next/link";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import pageStyles from "../page.module.css";
import config from "../../config.json"
import { Alternativa} from "../components/Alternativa"
import React from "react";

const perguntas = config.perguntas;


// usamos export default quando queremos criar uma nova página
export default function GameScreen() {

    const [answerState, setAnswerState] = React.useState("");
    const [perguntaAtual, mudarPerguntaAtual] = React.useState(0);
    const perguntaNumero = perguntaAtual + 1;
    const pergunta = perguntas[perguntaAtual];

    return(
        <main className={pageStyles.screen} style={{flex: 1, backgroundImage: `url("${pergunta.imagem}")` }}>
            <section className={pageStyles.container}>
            <div 
        style={{ 
            display: "flex", 
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
            <Link href="/">
            <h1>F1 QUIZ!</h1>
            </Link>
        </div>
               <Card headerTitle={`Pergunta ${perguntaNumero} de ${perguntas.length}`}>
                    <h1 style={{ fontSize: "16px", fontWeight: "bold", margin: "20px 32px"}}>
                        {pergunta.titulo}
                    </h1>
                    <p>
                        {pergunta.descricao}
                    </p>
                    <form 
                    style={{margin: "0px 32px", marginBottom: "20px"}}
                    onSubmit={() => {
                       event.preventDefault();
                        const $perguntaInfo = event.target as HTMLFormElement;
                        const formData = new FormData($perguntaInfo);
                        const {alternativa} = Object.fromEntries(formData.entries());
                        const isCorrectAnswer = alternativa === pergunta.answer;
                        mudarPerguntaAtual(perguntaAtual + 1);
                    }}
                    >
                        {pergunta.alternativas.map((alternativa, index) => (
                            <Alternativa 
                            key={alternativa + index}
                            label={alternativa}
                            order={index}
                            />
                        ))}
                            {answerState === "" && (
                                <button>
                                    Confirmar
                                </button>
                            )}
                            {answerState === "error" && (
                                "X"
                            )}
                            {answerState === "success" && (
                                "V"
                            )}
                        
                    </form>
                </Card> 
                <Footer></Footer>
            </section>
            
        </main>
    );
}

