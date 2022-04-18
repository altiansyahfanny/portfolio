import React from 'react'
import { DiCssdeck } from 'react-icons/di';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-8 px-8 bg-alfan-black '>
            <div className='flex items-center gap-2'>
                <DiCssdeck size="2.5rem" color='white' />
                <span className='text-alfan-white font-medium text-2xl'>Altiansyah F.</span>
            </div>
            <div>
                <ul className='flex items-center gap-8'>
                    <a href='#about' className='text-xl text-alfan-gray hover:text-alfan-white cursor-pointer'>About</a>
                    <a href='#projects' className='text-xl text-alfan-gray hover:text-alfan-white cursor-pointer'>Project</a>
                    <a href='#skills' className='text-xl text-alfan-gray hover:text-alfan-white cursor-pointer'>Skills & Experiences</a>
                    <a href='#contact' className='text-xl text-alfan-gray hover:text-alfan-white cursor-pointer'>Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar