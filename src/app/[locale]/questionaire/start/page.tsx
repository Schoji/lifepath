'use client';
import React, { useEffect, useState } from 'react';
import {
    findQuestionById,
    findStationById,
    QuestionNode,
    Station,
    questions,
} from '../questions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2, ExternalLink, Lightbulb } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Node = QuestionNode | Station;
type HistoryItem = { node: Node; };

const Questionaire = () => {
    const t = useTranslations("questionaire");
    const [currentNode, setCurrentNode] = useState<Node>(questions[0]);
    const [questionHistory, setQuestionHistory] = useState<HistoryItem[]>([{ node: questions[0] }]);
    const router = useRouter();

    const isQuestionNode = (node: Node): node is QuestionNode => {
        return 'answers' in node;
    };
    const sectionDelay = {
        progress: 0.001,
        image: 0.002,
        title: 0.003,
        tips: 0.004,
        answers: 0.005,
        nextSteps: 0.006,
        links: 0.007,
        back: 0.008
    };

    const goToNode = (nextNode: Node) => {
        setQuestionHistory([...questionHistory, { node: nextNode }]);
        setCurrentNode(nextNode);
    };

    useEffect(() => {
        // getShortestPath(currentNode.id);
        console.log(questionHistory);
    }, [currentNode]);

    return (
        <div className='flex min-h-screen w-full flex-col items-center gap-4 bg-zinc-100 px-3 py-4 text-black font-sans sm:gap-5 sm:px-4 sm:py-6'>
            <motion.progress
                className="progress progress-primary w-full max-w-2xl"
                value={questionHistory.length}
                max={questions.length / 3}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: sectionDelay.progress, ease: "easeOut" }}
            />
            {currentNode.image != null &&
                <motion.div
                    className='relative h-44 w-full max-w-2xl sm:h-56 md:h-64'
                    key={currentNode.image}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: sectionDelay.image, ease: "easeOut" }}
                >
                    <Image
                        src={currentNode.image}
                        alt={t("ui.image_alt")}
                        fill={true}
                        loading={questionHistory.length === 1 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 672px"
                        className='rounded-lg shadow-sm object-cover'
                    />
                </motion.div>
            }
            {isQuestionNode(currentNode) && (
                <motion.div
                    className='w-full max-w-2xl rounded-xl border border-zinc-300 p-5 text-center text-xl font-bold shadow-sm sm:p-8 sm:text-2xl md:p-10 md:text-3xl'
                    key={currentNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: sectionDelay.title, ease: "easeOut" }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: sectionDelay.title + 0.001, ease: "easeOut" }}
                    >
                        {t(currentNode.title)}
                    </motion.h1>
                </motion.div>
            )}
            {!isQuestionNode(currentNode) && (
                <motion.div
                    className='w-full max-w-2xl rounded-xl border border-zinc-300 bg-white p-5 shadow-sm sm:p-8'
                    key={currentNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: sectionDelay.title, ease: "easeOut" }}
                >
                    <motion.h1
                        className='mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl'
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: sectionDelay.title + 0.001, ease: "easeOut" }}
                    >
                        {t(currentNode.title)}
                    </motion.h1>
                    {currentNode.content && <p className='text-base leading-relaxed text-zinc-700 sm:text-lg md:text-xl'>{t(currentNode.content)}</p>}
                </motion.div>
            )}

            {!isQuestionNode(currentNode) && currentNode.tips && currentNode.tips.length > 0 && (
                <motion.div
                    className='w-full max-w-2xl rounded-xl border border-blue-200 bg-blue-100/50 p-5 shadow-sm sm:p-8'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: sectionDelay.tips, ease: "easeOut" }}
                >
                    <motion.h2
                        className='mb-3 flex items-center gap-2 text-lg font-bold sm:mb-4 sm:text-xl'
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: sectionDelay.tips + 0.001, ease: "easeOut" }}
                    >
                        <Lightbulb size={24} className='text-blue-500' />
                        {t("ui.tips_and_tricks")}
                    </motion.h2>
                    <ul className='flex flex-col gap-3 text-sm text-zinc-700 sm:text-base'>
                        {currentNode.tips.map((tip, index) => (
                            <motion.li
                                key={tip}
                                className='flex gap-3 items-start'
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.18, delay: sectionDelay.tips + 0.002 + (index * 0.001), ease: "easeOut" }}
                            >
                                <CheckCircle2 size={20} className='text-blue-500 shrink-0 mt-0.5' />
                                <span>{t(tip)}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}

            <div className='flex w-full max-w-2xl flex-col gap-3'>
                {isQuestionNode(currentNode) && currentNode.answers && currentNode.answers.map((answer, index) => {
                    const isNavigable = answer.next_question_id != null;
                    return (
                    <motion.button
                        onClick={() => {
                            const next = answer.next_question_id;
                            if (next == null) {
                                router.push("/result");
                                return;
                            }

                            const nextQuestion = findQuestionById(next);
                            if (nextQuestion != null) {
                                goToNode(nextQuestion);
                                return;
                            }

                            const nextStation = findStationById(next);
                            if (nextStation != null) {
                                goToNode(nextStation);
                            }
                        }}
                        className={`h-14 w-full rounded-lg border text-sm font-bold shadow-sm transition-colors duration-200 sm:h-16 sm:text-base ${isNavigable ? "cursor-pointer hover:shadow-md" : "cursor-default opacity-85"} ${answer.color ?? "bg-blue-300 !text-zinc-900 border-blue-300 hover:bg-blue-400 hover:border-blue-400"}`}
                        key={answer.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: sectionDelay.answers + (index * 0.001), ease: "easeOut" }}>
                        {t(answer.title)}
                    </motion.button>);
                })}

                {!isQuestionNode(currentNode) && currentNode.steps && currentNode.steps.length > 0 && (
                    <div className='flex flex-col gap-3'>
                        <motion.h2
                            className='text-xl sm:text-2xl font-bold'
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: sectionDelay.nextSteps, ease: "easeOut" }}
                        >
                            {t("ui.next_steps")}
                        </motion.h2>
                        {currentNode.steps.map((step, index) => {
                            const isNavigable = step.next_question_id != null;
                            return (
                            <motion.button
                                key={step.title}
                                onClick={() => {
                                    if (step.next_question_id == null) return;
                                    const nextQuestion = findQuestionById(step.next_question_id as number);
                                    if (nextQuestion != null) {
                                        goToNode(nextQuestion);
                                        return;
                                    }

                                    const nextStation = findStationById(step.next_question_id as number);
                                    if (nextStation != null) {
                                        goToNode(nextStation);
                                    }
                                }}
                                className={`w-full h-16 font-bold rounded-lg border shadow-sm transition-colors duration-200 ${isNavigable
                                    ? "h-14 cursor-pointer border-blue-300 bg-blue-50 text-sm text-blue-900 hover:border-blue-400 hover:bg-blue-100 hover:shadow-md sm:h-16 sm:text-base"
                                    : "cursor-default border-zinc-300 bg-white text-zinc-700"
                                    }`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: sectionDelay.nextSteps + 0.001 + (index * 0.001), ease: "easeOut" }}>
                                {t(step.title)}
                            </motion.button>
                            );
                        })}
                    </div>
                )}

                {!isQuestionNode(currentNode) && currentNode.links && currentNode.links.length > 0 && (
                    <div className='flex flex-col gap-2'>
                        <motion.h2
                            className='text-xl sm:text-2xl font-bold'
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: sectionDelay.links, ease: "easeOut" }}
                        >
                            {t("ui.further_resources")}
                        </motion.h2>
                        {currentNode.links.map((link, index) => (
                            <motion.div
                                key={link.url}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: sectionDelay.links + 0.001 + (index * 0.001), ease: "easeOut" }}
                            >
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='block w-full rounded-lg border border-zinc-300 bg-white p-3 shadow-sm transition hover:shadow-md sm:p-4'>
                                    <div className='flex items-start justify-between gap-4'>
                                    <div>
                                        <p className='font-semibold'>{t(link.title)}</p>
                                        {link.description && <p className='mt-1 text-sm text-zinc-600'>{t(link.description)}</p>}
                                    </div>
                                    <ExternalLink size={16} className='shrink-0 mt-1' />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}

                {questionHistory.length > 1 ?
                    <motion.button className='btn btn-ghost h-12 rounded-lg sm:h-16' onClick={() => {
                        const nextHistory = questionHistory.slice(0, -1);
                        setQuestionHistory(nextHistory);
                        setCurrentNode(nextHistory[nextHistory.length - 1].node);
                    }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: sectionDelay.back, ease: "easeOut" }}>
                        {t("ui.back")}
                    </motion.button>
                    : null}
            </div>
        </div>
    );
};

export default Questionaire;
