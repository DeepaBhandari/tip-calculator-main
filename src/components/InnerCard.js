import React, { useState } from 'react'
import dollarIcon from '../assets/images/icon-dollar.svg';

const InnerCard = () => {
    const [tipAmount, setTipAmount] = useState(0);
    return (
        <>
            <div className='flex mb-2 font-fontSize'>
                <p className="text-neutral-white ">Tip Amount<br /><p className="text-sm font-semibold text-neutral-grayish-cyan">/  person</p></p>
                <div className='flex item-center ml-auto  text-neutral-light-grayish-cyan'>

                    <img src={dollarIcon} alt='Dollar Icon' className='  h-5 w-5 ' />

                    <input
                        type='text'
                        value={tipAmount}
                        className='text-neutral-grayish-cyan font-bold bg-neutral-very-dark-cyan w-full py-2 pl-10 pr-10  text-bold'
                    />
                </div>
            </div>
            <div className='flex mb-2'>
                <p className="text-neutral-white ">Total<br /><p className="text-sm font-semibold text-neutral-grayish-cyan">/  person</p></p>
            </div>

            <button className="bg-neutral-dark-grayish-cyan text-neutral-very-dark-cyan font-bold font-md py-2 px-4 rounded-md mt-auto ">RESET</button>

        </>
    )
}

export default InnerCard