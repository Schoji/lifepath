"use client";
import { ArrowRight, CheckCircle2, ExternalLink, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { findQuestionById, QuestionNode, questions } from './questions';
import React, { useState } from 'react';
import Link from 'next/link';

type HistoryItem = {
    question: QuestionNode,
    label: string;
};

const YourPath = () => {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionNode>(questions[0]);
    const [questionHistory, setQuestionHistory] = useState<HistoryItem[]>([{ question: questions[0], label: "Home" }]);

    const ChangeQuestion = (questionId: number, label: string) => {
        const nextQuestion = findQuestionById(questionId);
        if (!nextQuestion) {
            console.log("Invalid question ID in ChangeQuestion");
            return;
        }
        setCurrentQuestion(nextQuestion);
        setQuestionHistory([...questionHistory, { question: nextQuestion, label: label }]);
    };

    const GoBackQuestion = (index: number) => {
        if (index === questionHistory.length - 1) return;
        const targetQuestion = questionHistory[index].question;
        setCurrentQuestion(targetQuestion);
        setQuestionHistory(questionHistory.slice(0, index + 1));
    };

    return (
        <div className='w-screen min-h-screen flex justify-center bg-zinc-100 text-black font-sans'>
            <div className='w-5xl flex flex-col gap-10 p-6 rounded-xl mx-auto'>
                {questionHistory != null && questionHistory.length !== 0 &&
                    <div className='breadcrumbs text-sm'>
                        <ul>
                            {questionHistory.map((question, index) =>
                                <li key={index} className={question.question.id === currentQuestion.id ? "font-bold" : "font-normal"}>
                                    <a onClick={() => GoBackQuestion(index)}>{question.label}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                }
                <div className='relative h-96'>
                    <Image src={"/1.png"} alt={"image"} fill={true} className='rounded-lg shadow-md object-cover'></Image>
                </div>
                <h1 className='text-5xl font-bold'>{currentQuestion.title}</h1>
                <p className='whitespace-normal text-xl'>{currentQuestion.content}</p>
                {currentQuestion.tips != null &&
                    <div className='bg-blue-100 border-blue-200 border w-full p-8 rounded-lg flex flex-col gap-3 shadow-sm'>
                        <h1 className='font-bold text-xl flex gap-2 items-center'><Lightbulb size={24} className='text-blue-500' /> Tips & Tricks</h1>
                        {currentQuestion.tips.map((tip, index) => <p key={index} className='flex gap-2 items-baseline'><CheckCircle2 size={16} className='text-blue-500' />{tip}</p>)}
                    </div>
                }
                {currentQuestion.steps != null &&
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>Next steps</h1>
                        {currentQuestion.steps.map((step, index) =>
                            <button
                                key={index}
                                onClick={() => ChangeQuestion(step.next_question_id, step.title)}
                                className='btn btn-xl w-full btn-outline flex justify-between border-zinc-300 shadow-sm text-sm font-normal pt-5 pb-5 text-md'>
                                {step.title}
                                <ArrowRight size={16} />
                            </button>
                        )}

                    </div>
                }
                {currentQuestion.links != null &&
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-2xl font-bold'>Further resources</h1>
                        {currentQuestion.links.map((link, index) =>
                            <Link key={index}
                                href={link.url}
                                className='btn btn-xl w-full btn-outline flex justify-between border-zinc-300 shadow-sm text-sm font-normal pt-5 pb-5 text-md'>
                                {link.title}
                                <ExternalLink size={16} />
                            </Link>)}
                    </div>
                }
            </div>
        </div>
    );
};

export default YourPath;