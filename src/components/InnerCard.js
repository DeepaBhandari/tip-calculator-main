import React from 'react'

const InnerCard = () => {

    return (
        <>
            <label className="text-gray-700 mb-2">Tip Amount/Person</label>
            <span className="border border-gray-300 rounded-md py-2 px-3 mb-4">Calculated Tip Amount</span>

            <label className="text-gray-700 mb-2">Total/Person</label>
            <span className="border border-gray-300 rounded-md py-2 px-3 mb-4">Calculated Total Amount</span>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Reset</button>

        </>
    )
}

export default InnerCard