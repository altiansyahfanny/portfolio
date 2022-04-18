import React from 'react'

const SklillPills = ({ icon, title }) => {
    return (
        <div className='mt-4'>
            <div className='w-20 h-20 rounded-full bg-gray-800 p-4 mx-auto cursor-pointer hover:bg-gray-700'>
                <img src={icon} alt="css" />
            </div>
            <div className='mt-2 text-center text-alfan-white text-xs tracking-wider'>
                {title}
            </div>
        </div>
    )
}

export default SklillPills