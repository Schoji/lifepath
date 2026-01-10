'use client';
import React, { useEffect, useState } from 'react';
import { findQuestionById, QuestionNode, questions } from './questions';
import Image from 'next/image';



const Questionaire = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<QuestionNode>(questions[0]);
    const [questionHistory, setQuestionHistory] = useState<number[]>([questions[0].id]);

    useEffect(() => {
        // getShortestPath(selectedQuestion.id);
        console.log(questionHistory);
    }, [selectedQuestion]);

    return (
        <div className='flex gap-5 flex-col min-h-screen items-center justify-center bg-zinc-100 text-black font-sans '>
            <progress className="progress progress-primary w-2xl" value={questionHistory.length} max={questions.length / 3}></progress>
            {selectedQuestion.image != null &&
                <div className='relative w-2xl h-64 '>
                    <Image src={selectedQuestion.image} alt={"image"} fill={true} className='rounded-lg shadow-sm object-cover'></Image>
                </div>
            }
            <div className='w-2xl text-4xl font-bold p-10 border border-zinc-300 shadow-sm rounded-xl text-center'>
                <h1> {selectedQuestion.title}</h1>
            </div>
            <div className='w-2xl flex flex-col gap-3'>
                {selectedQuestion.answers && selectedQuestion.answers.map((answer) =>
                    <button
                        onClick={() => {
                            if (answer.next_question_id != null) {
                                const nextQuestion = findQuestionById(answer.next_question_id);
                                if (nextQuestion != null) {
                                    setQuestionHistory([...questionHistory, selectedQuestion.id]);
                                    setSelectedQuestion(nextQuestion);
                                }
                            }
                        }
                        }
                        className='btn btn-primary w-full h-16 rounded-lg shadow-sm'
                        key={answer.title}>
                        {answer.title}

                    </button>)}
                {questionHistory.length > 1 ?
                    <button className='btn btn-ghost h-16 rounded-lg' onClick={() => {
                        setQuestionHistory(questionHistory.slice(0, -1));
                        setSelectedQuestion(findQuestionById(questionHistory[questionHistory.length - 1])!);
                    }}> {"< Back"}</button>
                    : null}
            </div>
        </div>
    );
};

export default Questionaire;