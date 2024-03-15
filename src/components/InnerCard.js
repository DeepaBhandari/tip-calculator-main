import React from 'react'
import dollarIcon from '../assets/images/icon-dollar.svg';

const InnerCard = ({ tipAmount, totalPerPerson }) => {

    return (
        <>
            <div className='flex flex-wrap items-center mb-4'>
                <div className="items-center ">
                    <p className="text-neutral-white mb-1">Tip Amount</p>
                    <p className="text-sm font-semibold text-neutral-grayish-cyan">/ person</p>
                </div>
                <div className='ml-0 inline-flex items-center py-1'>
                    <img src={dollarIcon} alt='Dollar Icon' className='h-5 w-5' style={{ color: 'hsl(172, 67%, 45%)' }} />
                    <p className="text-primary-strong-cyan py-2 pl-2 pr-10 rounded-lg font-bold text-input">{tipAmount}</p>
                </div>
            </div>

            <div className='flex mb-2'>
                <div className="items-center ">
                    <p className="text-neutral-white mb-1">Total</p>
                    <p className="text-sm font-semibold text-neutral-grayish-cyan">/ person</p>
                </div>
                <div className='ml-0 inline-flex items-center py-1'>
                    <img src={dollarIcon} alt='Dollar Icon' className='h-5 w-5' style={{ color: 'hsl(172, 67%, 45%)' }} />
                    <p className="text-primary-strong-cyan py-2 pl-2 pr-10 rounded-lg font-bold text-input">{totalPerPerson}</p>
                </div>
            </div>
            <button className="bg-neutral-dark-grayish-cyan text-neutral-very-dark-cyan font-bold font-md py-2 px-4 rounded-md mt-auto hover:bg-primary-strong-cyan">RESET</button>
        </>
    )
}

export default InnerCard