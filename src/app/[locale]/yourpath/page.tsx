import { Home } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import TipAndTricks from './components/tip_tricks';

const YourPath = () => {
    return (
        <div className='w-screen min-h-screen flex justify-center bg-zinc-100 text-black font-sans'>
            <div className='w-2xl flex flex-col gap-4 p-6 rounded-xl mx-auto bg-red-900'>
                <div className='breadcrumbs text-sm'>
                    <ul>
                        <li><a><Home />Home</a></li>
                    </ul>
                </div>
                <div className='relative h-64'>
                    <Image src={"/1.png"} alt={"image"} fill={true} className='rounded-lg shadow-sm object-cover'></Image>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Welcome to Pathways</h1>
                    <p className='whitespace-normal'>This guide will help you navigate your options in Germany. Whether you want to earn money, continue your education, or learn German, we have resources and step-by-step guidance for you. Choose the path that best fits your current situation and goals.</p>
                </div>
                <TipAndTricks tips={["XDD", "lolek"]} />
            </div>
        </div>
    );
};

export default YourPath;