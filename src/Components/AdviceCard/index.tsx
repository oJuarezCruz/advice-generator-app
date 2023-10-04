import patternDividerDesktop from './pattern-divider-desktop.svg';
import patternDividerMobile from './pattern-divider-mobile.svg';
import iconDice from './icon-dice.svg';
import axios from 'axios';
import { useState } from 'react';

export default function AdviceCard() {
    const [dataID, setDataID] = useState();
    const [dataAdvice, setDataAdvice] = useState();

    const apiRequest = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');

        setDataID(response.data.slip.id);
        setDataAdvice(response.data.slip.advice);
    }

    apiRequest();

    return (
        <main className="flex flex-col items-center bg-cardBg shadow-lg w-80 lg:w-1/3 rounded-lg px-16 py-12 relative">
            <h1 className="text-1xl tracking-widest uppercase font-bold text-center text-neon pb-6">
                Advice #{dataID}
            </h1>

            <p className="text-2xl lg:text-[32px] text-txtQuotes font-extrabold text-center pb-8">
                "{dataAdvice}"
            </p>

            <img
                src={patternDividerMobile}
                alt=''
                className='lg:hidden'
            />
            <img
                src={patternDividerDesktop}
                alt=''
                className='hidden lg:block'
            />

            <button
                className='w-12 p-4 rounded-full bg-neon absolute -bottom-6'
                onClick={() => { apiRequest() }}>
                <img
                    src={iconDice}
                    alt='Dice'
                />
            </button>
        </main >
    )
}