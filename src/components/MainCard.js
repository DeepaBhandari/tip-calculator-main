import React, { useState } from 'react'
import InnerCard from './InnerCard'
import dollarIcon from '../assets/images/icon-dollar.svg'
import personIcon from '../assets/images/icon-person.svg'
import { percentage } from '../constants/percentage'

const MainCard = () => {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [people, setPeople] = useState('');
    const [tipAmount, setTipAmount] = useState(0.00);
    const [totalPerPerson, setTotalPerPerson] = useState(0.00);
    const [customTipPercentage, setCustomTipPercentage] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);

    const handleTipPercentage = (tipPercentage) => {
        setTipPercentage(tipPercentage);
        handleCalculateTip(customTipPercentage);
    }
    const handleCustomPercentage = () => {
        setShowCustomInput(true);
        setCustomTipPercentage('');

    }
    const calculateTipAmount = (tipPercentage, billAmount, people) => {
        if (tipPercentage === null || billAmount === null || people === null) {
            return { tipAmountPerPerson: 0, totalPerPerson: 0 };
        }
        const totalTip = (parseFloat(tipPercentage) * parseFloat(billAmount)) / 100;
        const tipAmountPerPerson = totalTip / parseFloat(people);
        const totalPerPerson = (parseFloat(billAmount) / parseFloat(people)) + tipAmountPerPerson;
        return { tipAmountPerPerson, totalPerPerson };
    }
    const handleCalculateTip = (tipPercentage) => {
        const { tipAmountPerPerson, totalPerPerson } = calculateTipAmount(tipPercentage, billAmount, people);
        setTipAmount(parseFloat(tipAmountPerPerson.toFixed(2)));
        setTotalPerPerson(parseFloat(totalPerPerson.toFixed(2)));
        console.log(tipAmount);
        console.log(totalPerPerson);
    }

    return (
        <div className='bg-neutral-white flex justify-center shadow-lg rounded-lg p-6'>
            <form className='flex flex-col  mr-4'>
                <div className='items-center mb-4'>
                    <label className='font-bold text-neutral-dark-grayish-cyan text-sm mb-1 mr-2'>Bill</label>
                    <div className='relative flex bg-neutral-very-light-grayish-cyan'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <img src={dollarIcon} alt='Dollar Icon' className='h-3 w-3' />
                        </span>
                        <input
                            type='text'
                            value={billAmount}
                            onChange={(e) => setBillAmount(e.target.value)}
                            className='w-full py-2 pl-10 pr-10  font-semibold font-sm text-neutral-grayish-cyan rounded-lg  bg-neutral-very-light-grayish-cyan '
                        />
                    </div>
                </div>
                <div className="items-center mb-4">
                    <p className='font-bold text-neutral-dark-grayish-cyan text-sm mb-1'>Select Tip %</p>
                    <div className='grid grid-cols-3 gap-4 '>
                        {percentage && percentage.map((item, index) => (
                            <button
                                key={index}
                                className={`bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white hover:bg-primary-strong-cyan ${tipPercentage === percentage ? 'bg-primary-strong-cyan' : ''
                                    }`}
                                onClick={() => handleTipPercentage(item)}
                            >
                                {item}%
                            </button>
                        ))}
                        <button
                            className='bg-neutral-very-light-grayish-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-dark-grayish-cyan font-bold hover:bg-primary-strong-cyan'
                            onClick={() => handleCustomPercentage()}
                        >Custom</button>
                    </div>

                    {showCustomInput && (
                        <div className="mt-4">
                            <input
                                type="number"
                                value={customTipPercentage}
                                onChange={(e) => setCustomTipPercentage(e.target.value)}
                                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                                placeholder="Enter custom tip percentage"
                            />
                        </div>
                    )}
                </div>
                <div className='items-center mb-4'>
                    <label className='font-bold text-neutral-dark-grayish-cyan text-sm mb-1 mr-2'>Number of People</label>
                    <div className='relative flex bg-neutral-very-light-grayish-cyan'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <img src={personIcon} alt='Dollar Icon' className='h-3 w-3' />
                        </span>
                        <input
                            type='text'
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            className='w-full py-2 pl-10 pr-10  font-semibold font-sm text-neutral-grayish-cyan rounded-lg  bg-neutral-very-light-grayish-cyan '
                        />
                    </div>
                </div>
            </form>
            <div className='flex flex-col bg-neutral-very-dark-cyan p-6 rounded-md ml-auto'>
                <InnerCard tipAmount={tipAmount} totalPerPerson={totalPerPerson} />
            </div>
        </div>



    )
}

export default MainCard