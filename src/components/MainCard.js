import React, { useState } from 'react'
import InnerCard from './InnerCard'
import dollarIcon from '../assets/images/icon-dollar.svg'
import personIcon from '../assets/images/icon-person.svg'

const MainCard = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [people, setPeople] = useState(0)
    return (
        <div className='bg-neutral-white flex justify-center shadow-lg rounded-lg p-6'>
            <form className='flex flex-col items-center mr-4'>

                <div className='items-center mb-4'>
                    <label className='text-gray-700 mr-2'>Bill</label>
                    <div className='relative flex-1'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <img src={dollarIcon} alt='Dollar Icon' className='h-5 w-5 text-gray-500' />
                        </span>
                        <input
                            type='text'
                            value={totalAmount}
                            className='w-full py-2 pl-10 pr-10 ml-auto rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500'
                        />
                    </div>
                </div>

                <p>Select Tip</p>
                <div className='grid'>
                    <box>5%</box>
                    <box>10%</box>
                    <box>15%</box>
                    <box>25%</box>
                    <box>50%</box>
                    <box>Custom</box>
                </div>

                <div className='items-center mb-4'>
                    <label className='text-gray-700 mr-2'>Number of People</label>
                    <div className='relative flex-1'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <img src={personIcon} alt='Dollar Icon' className='h-5 w-5 text-gray-500' />
                        </span>
                        <input
                            type='text'
                            value={people}
                            className='w-full py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500'
                        />
                    </div>
                </div>
            </form>
            <div className='flex flex-col bg-neutral-very-dark-cyan p-6 rounded-md ml-auto'>
                <InnerCard />
            </div>
        </div>



    )
}

export default MainCard