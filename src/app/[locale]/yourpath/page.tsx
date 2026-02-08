"use client";
import { ArrowRight, CheckCircle2, ExternalLink, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { findQuestionById, QuestionNode, questions } from './questions';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';

type HistoryItem = {
    question: QuestionNode,
    label: string;
};

const YourPath = () => {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionNode>(questions[0]);
    const [questionHistory, setQuestionHistory] = useState<HistoryItem[]>([{ question: questions[0], label: "home" }]);

    const ChangeQuestion = (questionId: string, label: string) => {
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

    const t = useTranslations("your_path");

    return (
        <div className='w-screen min-h-screen flex justify-center bg-linear-to-br from-zinc-100 to-zinc-200 text-black font-sans'>
            <motion.div
                className='w-5xl flex flex-col gap-10 p-6 rounded-xl mx-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={currentQuestion.id}
            >
                {questionHistory != null && questionHistory.length !== 0 &&
                    <div className='breadcrumbs text-sm whitespace-normal'>
                        <ul className='flex flex-wrap leading-relaxed'>
                            {questionHistory.map((question, index) =>
                                <li key={index} className={question.question.id === currentQuestion.id ? "font-bold" : "font-normal"}>
                                    <a className="hover:cursor-pointer" onClick={() => GoBackQuestion(index)}>{t(question.label)}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                }
                <div className='relative h-96'>
                    <Image src={currentQuestion.image} alt={"image"} fill={true} className='rounded-lg shadow-md object-cover'></Image>
                </div>
                <h1 className='text-5xl font-bold'>{t(currentQuestion.title)}</h1>
                <p className='whitespace-normal text-xl text-gray-700'>{t(currentQuestion.content)}</p>
                {currentQuestion.tips != null &&
                    <div className='bg-blue-100/50 border-blue-200 border w-full p-8 rounded-xl flex flex-col gap-3 shadow-sm'>
                        <h1 className='font-bold text-xl flex gap-2 items-center'>
                            <Lightbulb size={24} className='text-blue-500' />{t("tips_and_tricks")}
                        </h1>
                        {currentQuestion.tips.map((tip, index) => (
                            <div key={index} className='ml-10 flex gap-3 items-start'>
                                <CheckCircle2
                                    size={20}
                                    className='text-blue-500 shrink-0 mt-0.5'
                                />
                                <p className='text-zinc-700 leading-snug'>
                                    {t(tip)}
                                </p>
                            </div>
                        ))}
                    </div>
                }
                {currentQuestion.steps != null &&
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>{t("next_steps")}</h1>
                        {currentQuestion.steps.map((step, index) =>
                            <button
                                key={index}
                                onClick={() => ChangeQuestion(step.next_question_id, step.title)}
                                className={`btn btn-xl w-full btn-outline flex justify-between border-zinc-300 shadow-sm text-sm font-medium pt-5 pb-5 text-md rounded-lg ${step.next_question_id == "TODO" && 'pointer-events-none'}`}>
                                {t(step.title)}
                                {step.next_question_id != "TODO" &&
                                    <ArrowRight size={16} />}
                            </button>
                        )}

                    </div>
                }
                {currentQuestion.links != null &&
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>{t("further_resources")}</h1>
                        {currentQuestion.links.map((link, index) =>
                            <Link key={index}
                                href={link.url}
                                className='btn btn-xl w-full btn-outline flex justify-between border-zinc-300 shadow-sm cursor-pointer text-sm font-medium pt-5 pb-5 text-md text-left rounded-lg'>
                                {t(link.title)}
                                <ExternalLink size={16} />
                            </Link>)}
                    </div>
                }
            </motion.div>
        </div>
    );
};

export default YourPath;