"use client";

import Link from "next/link";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import pageStyles from "../page.module.css";
import config from "../../config.json"
import { Alternativa} from "../components/Alternativa"
import React from "react";
import { useRouter } from "next/navigation";

const perguntas = config.perguntas;

const answerStates = {
    DEFAULT: "DEFAULT",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS"
} as const;



// usamos export default quando queremos criar uma nova página
export default function GameScreen() {

    const router = useRouter();
    const [answerState, setAnswerState] = React.useState<keyof typeof answerStates>(answerStates.DEFAULT);
    const [perguntaAtual, mudarPerguntaAtual] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState([]);
    const perguntaNumero = perguntaAtual + 1;
    const pergunta = perguntas[perguntaAtual];
    const eUltimaPergunta = perguntaNumero === perguntas.length;

    console.log(userAnswers);

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
                    style={{margin: "0px 32px", marginBottom: "20px", marginTop: "24px"}}
                    onSubmit={() => {
                       event.preventDefault();
                        const $perguntaInfo = event.target as HTMLFormElement;
                        const formData = new FormData($perguntaInfo);
                        const {alternativa} = Object.fromEntries(formData.entries());
                        const isCorrectAnswer = alternativa === pergunta.answer;
                        console.log("alternativa", alternativa);
                        console.log("resposta", pergunta.answer);

                        if (isCorrectAnswer){
                            setUserAnswers([
                                ...userAnswers,
                                true
                            ]);
                            setAnswerState(answerStates.SUCCESS);
                        }
                        if (!isCorrectAnswer) {
                            setUserAnswers([
                                ...userAnswers,
                                false
                            ]);
                            setAnswerState(answerStates.ERROR);
                        }
                        
                        setTimeout(() => {
                            if(eUltimaPergunta) {
                                
                                const totalPoints = [...userAnswers, isCorrectAnswer].reduce(
                                    (_totalPoints, currentAnswer) => {
                                        return currentAnswer ? _totalPoints + 1 : _totalPoints;
                                }, 0);

                                alert(`Você concluiu o desafio e acertou ${totalPoints}`);
                                router.push("/");
                                return;
                            }
                            mudarPerguntaAtual(perguntaAtual + 1);
                            setAnswerState(answerStates.DEFAULT);
                        }, 2 * 1000);
                        // mudarPerguntaAtual(perguntaAtual + 1);
                    }}
                    >
                        {pergunta.alternativas.map((alternativa, index) => (
                            <div
                                
                                style={{
                                    marginBottom: "8px"
                                }}
                            >
                                <Alternativa 
                                key={alternativa + index}
                                label={alternativa}
                                order={index}
                                />
                            </div>
                            
                        ))}
                            {answerState === answerStates.DEFAULT && (
                                <button>
                                    Confirmar
                                </button>
                            )}

                            <p style={{textAlign: "center"}}>
                                {answerState === answerStates.ERROR && (
                                    "❌"
                                )}
                                {answerState === answerStates.SUCCESS && (
                                    "✅"
                                )} 
                            </p>
                            
                        
                    </form>
                </Card> 
                <Footer></Footer>
            </section>
            
        </main>
    );
}

