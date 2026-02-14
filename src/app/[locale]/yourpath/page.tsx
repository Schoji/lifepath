"use client";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { findQuestionById, QuestionNode, questions } from './questions';
import React, { useState } from 'react';
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
        <div className='w-full min-h-screen overflow-x-hidden bg-linear-to-br from-zinc-100 to-zinc-200 text-black font-sans'>
            <motion.div
                className='w-full max-w-5xl flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 py-6 rounded-xl mx-auto'
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
                <div className='relative h-56 sm:h-72 lg:h-96 w-full'>
                    <Image
                        src={currentQuestion.image}
                        alt={"image"}
                        fill={true}
                        loading={questionHistory.length === 1 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1024px"
                        className='rounded-lg shadow-md object-cover'
                    />
                </div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight wrap-break-word'>{t(currentQuestion.title)}</h1>
                <p className='whitespace-normal text-base sm:text-lg lg:text-xl text-gray-700 wrap-break-word'>{t(currentQuestion.content)}</p>
                {currentQuestion.tips != null &&
                    <div className='bg-blue-100/50 border-blue-200 border w-full p-4 sm:p-6 lg:p-8 rounded-xl flex flex-col gap-3 shadow-sm'>
                        <h1 className='font-bold text-lg sm:text-xl flex gap-2 items-center'>
                            <Lightbulb size={24} className='text-blue-500' />{t("tips_and_tricks")}
                        </h1>
                        {currentQuestion.tips.map((tip, index) => (
                            <div key={index} className='ml-0 sm:ml-6 lg:ml-10 flex gap-3 items-start'>
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
                        <h1 className='text-xl sm:text-2xl font-bold'>{t("next_steps")}</h1>
                        {currentQuestion.steps.map((step, index) =>
                            <button
                                key={index}
                                onClick={() => ChangeQuestion(step.next_question_id, step.title)}
                                className={`btn btn-outline w-full min-h-14 sm:min-h-16 px-4 py-3 flex justify-between items-center border-zinc-300 shadow-sm text-sm sm:text-base font-medium rounded-lg ${step.next_question_id == "TODO" && 'pointer-events-none'}`}>
                                <span className='text-left whitespace-normal wrap-break-word'>{t(step.title)}</span>
                                {step.next_question_id != "TODO" &&
                                    <ArrowRight size={16} />}
                            </button>
                        )}

                    </div>
                }
                {currentQuestion.links != null &&
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl sm:text-2xl font-bold'>{t("further_resources")}</h1>
                        {currentQuestion.links.map((link, index) =>
                            <a key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='btn btn-outline w-full min-h-14 sm:min-h-16 px-4 py-3 flex justify-between items-center border-zinc-300 shadow-sm cursor-pointer text-sm sm:text-base font-medium text-left rounded-lg'>
                                <span className='whitespace-normal wrap-break-word'>{t(link.title)}</span>
                                <ExternalLink size={16} />
                            </a>)}
                    </div>
                }
                {questionHistory.length > 1 && (
                    <div className='pt-2'>
                        <button
                            onClick={() => {
                                GoBackQuestion(questionHistory.length - 2);
                            }}
                            className='btn btn-ghost w-full min-h-12 sm:min-h-14 border border-zinc-300 rounded-lg'
                        >
                            <ArrowLeft size={16} />
                            {t("back")}
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default YourPath;
