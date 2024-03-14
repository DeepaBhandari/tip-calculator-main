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
                    <label className='font-medium text-neutral-dark-grayish-cyan text-sm mb-1 mr-2'>Bill</label>
                    <div className='relative flex bg-neutral-very-light-grayish-cyan'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <img src={dollarIcon} alt='Dollar Icon' className='h-3 w-3' />
                        </span>
                        <input
                            type='text'
                            value={totalAmount}
                            className='w-full py-2 pl-10 pr-10 ml-auto font-semibold font-sm text-neutral-grayish-cyan rounded-lg  bg-neutral-very-light-grayish-cyan '
                        />
                    </div>
                </div>
                <div className="items-center mb-4">
                    <p className='font-medium text-neutral-dark-grayish-cyan text-sm mb-1'>Select Tip %</p>
                    <div className='grid grid-cols-3 gap-4 '>
                        <box className='bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white '>5%</box>
                        <box className='bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white'>10%</box>
                        <box className='bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white'>15%</box>
                        <box className='bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white'>25%</box>
                        <box className='bg-neutral-very-dark-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-white'>50%</box>
                        <box className='bg-neutral-very-light-grayish-cyan p-2 rounded-md cursor-pointer items-center justify-center flex text-neutral-dark-grayish-cyan font-bold'>Custom</box>
                    </div>

                </div>
                <div className='items-center mb-4'>
                    <label className='mr-2 font-medium text-neutral-dark-grayish-cyan text-sm mb-1'>Number of People</label>
                    {/* <div className='relative flex bg-neutral-very-light-grayish-cyan'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 pr-10'>
                            <img src={personIcon} alt='Person Icon' className='h-3 w-3 ' />
                        </span>
                        <input
                            type='text'
                            value={`${people}`}
                            className='w-full right-0 py-2 pl-10 pr-10 rounded-lg font-semibold font-sm text-neutral-grayish-cyan bg-neutral-very-light-grayish-cyan'
                        />
                    </div> */}
                    <div className='flex relative items-center bg-neutral-very-light-grayish-cyan'>
                        <span className='pl-3 py-2 mr-12  flex items-center inset-y-0 left-0'>

                            <img src={personIcon} alt='Person Icon' className='h-3 w-3 ' />
                        </span>
                        <input
                            type='text'
                            value={people}
                            className='w-full  flex items-center rounded-lg font-semibold font-sm text-neutral-grayish-cyan bg-transparent'
                        />
                        {/* <input
                            type='text'
                            value={people}
                            className='w-full py-2 pl-10 pr-10  flex-items-center inset-y-0 right-0 rounded-lg font-semibold font-sm text-neutral-grayish-cyan bg-transparent'
                        />
                        <span className=' pl-3'>
                            <img src={personIcon} alt='Person Icon' className='h-3 w-3' />
                        </span>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                            {people}
                        </span> */}
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