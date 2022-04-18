import React from 'react'
import { Subtitle } from '../components'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const Hero = () => {
    return (
        <div className='bg-alfan-black min-h-screen -mt-[104px] pt-[104px]'>
            <div className='px-28 py-8'>
                <div className='w-2/3'>
                    <div className='text-2xl text-cyan-500'>👋 I'm Altiansyah Fanny</div>
                    <div className='text-[65px] font-bold text-transparent bg-clip-text i inline-block bg-gradient-to-r from-alfan-white to-alfan-gray leading-[70px] mt-4 mb-14'>Welcome To <br /> My Personal Portfolio</div>
                    <Subtitle>
                        I'm from Banjarmasin, Indonesia I'm 23 years old and I have been working as a Web Developer for more than 1 years. Now I working at CV. YASSA PRATAMA ABADI as a programmer.
                    </Subtitle>
                    <div className='flex items-center gap-8 mt-8'>
                        <button type='button' className='px-14 py-4 font-bold text-2xl rounded-full text-alfan-white bg-gradient-to-r from-purple-500 to-cyan-500'>Learn More</button>
                        <div className='flex items-center gap-8'>
                            <AiFillGithub size="1.8rem" color='white' />
                            <AiFillLinkedin size="1.8rem" color='white' />
                            <AiFillInstagram size="1.8rem" color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero