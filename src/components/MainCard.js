import React, { useState } from 'react';
import InnerCard from './InnerCard';
import dollarIcon from '../assets/images/icon-dollar.svg';
import personIcon from '../assets/images/icon-person.svg';
import { percentage } from '../constants/percentage';

const MainCard = () => {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [people, setPeople] = useState('');
    const [tipAmount, setTipAmount] = useState(0.00);
    const [totalPerPerson, setTotalPerPerson] = useState(0.00);
    const [customTipPercentage, setCustomTipPercentage] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);

    const calculateTipAmount = (tipPercentage, billAmount, people) => {
        if (tipPercentage === '' || billAmount === '' || people === '') {
            return { tipAmountPerPerson: 0.00, totalPerPerson: 0.00 };
        }
        const totalTip = (parseFloat(tipPercentage) * parseFloat(billAmount)) / 100;
        const tipAmountPerPerson = totalTip / parseFloat(people);
        const totalPerPerson = (parseFloat(billAmount) / parseFloat(people)) + tipAmountPerPerson;
        return { tipAmountPerPerson, totalPerPerson };
    };
    const handleBillAmountChange = (e) => {
        const newBillAmount = e.target.value;
        setBillAmount(newBillAmount);
        const { tipAmountPerPerson, totalPerPerson } = calculateTipAmount(tipPercentage, newBillAmount, people);
        setTipAmount(tipAmountPerPerson.toFixed(2));
        setTotalPerPerson(totalPerPerson.toFixed(2));
    };
    const handleTipPercentageChange = (selectedTipPercentage) => {
        setShowCustomInput(selectedTipPercentage === 'Custom');
        setTipPercentage(selectedTipPercentage);
        if (selectedTipPercentage !== 'Custom') {
            const { tipAmountPerPerson, totalPerPerson } = calculateTipAmount(selectedTipPercentage, billAmount, people);
            setTipAmount(tipAmountPerPerson.toFixed(2));
            setTotalPerPerson(totalPerPerson.toFixed(2));
        }
    };
    const handlePeopleChange = (e) => {
        const newPeople = e.target.value;
        setPeople(newPeople);

        const { tipAmountPerPerson, totalPerPerson } = calculateTipAmount(tipPercentage, billAmount, newPeople);
        setTipAmount(tipAmountPerPerson.toFixed(2));
        setTotalPerPerson(totalPerPerson.toFixed(2));
    };


    const handleCustomPercentageChange = (e) => {
        const customPercentage = e.target.value;
        setCustomTipPercentage(customPercentage);

        const { tipAmountPerPerson, totalPerPerson } = calculateTipAmount(customPercentage, billAmount, people);
        setTipAmount(tipAmountPerPerson.toFixed(2));
        setTotalPerPerson(totalPerPerson.toFixed(2));
    };


    const handleReset = () => {
        setBillAmount('');
        setTipPercentage('');
        setPeople('');
        setTipAmount(0.00);
        setTotalPerPerson(0.00);
        setCustomTipPercentage('');
        setShowCustomInput(false);
    };

    return (
        <div className='bg-neutral-white flex justify-center shadow-lg rounded-lg p-6'>
            <div className='flex flex-col  mr-4'>
                <div className='items-center mb-4'>
                    <label className='font-bold text-neutral-dark-grayish-cyan text-sm mb-1 mr-2'>Bill</label>
                    <div className='relative flex bg-neutral-very-light-grayish-cyan'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <img src={dollarIcon} alt='Dollar Icon' className='h-3 w-3' />
                        </span>
                        <input
                            type='text'
                            value={billAmount}
                            onChange={handleBillAmountChange}
                            className='w-full py-2 pl-10 pr-10 font-semibold font-sm text-neutral-grayish-cyan rounded-lg bg-neutral-very-light-grayish-cyan'
                        />
                    </div>
                </div>
                <div className="items-center mb-4">
                    <p className='font-bold text-neutral-dark-grayish-cyan text-sm mb-1'>Select Tip %</p>
                    <div className='grid grid-cols-3 gap-4 '>
                        {percentage && percentage.map((item, index) => (
                            <button
                                key={index}
                                className={`bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white hover:bg-primary-strong-cyan ${tipPercentage === item ? 'bg-primary-strong-cyan' : ''}`}
                                onClick={() => handleTipPercentageChange(item)}
                            >
                                {item}%
                            </button>
                        ))}
                        <button
                            className='bg-neutral-very-light-grayish-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-dark-grayish-cyan font-bold hover:bg-primary-strong-cyan'
                            onClick={() => handleTipPercentageChange('Custom')}
                        >Custom</button>
                    </div>

                    {showCustomInput && (
                        <div className="mt-4">
                            <input
                                type="number"
                                value={customTipPercentage}
                                onChange={handleCustomPercentageChange}
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
                            onChange={handlePeopleChange}
                            className='w-full py-2 pl-10 pr-10 font-semibold font-sm text-neutral-grayish-cyan rounded-lg bg-neutral-very-light-grayish-cyan'
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-neutral-very-dark-cyan p-6 rounded-md ml-auto'>
                <InnerCard tipAmount={tipAmount} totalPerPerson={totalPerPerson} />
                <button className="bg-neutral-dark-grayish-cyan text-neutral-very-dark-cyan font-bold font-md py-2 px-4 rounded-md mt-auto hover:bg-primary-strong-cyan" onClick={handleReset}>RESET</button>
            </div>
        </div>
    );
};


export default MainCard