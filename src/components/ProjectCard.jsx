import React from 'react'
import { urlFor } from '../client'

const ProjectCard = ({ poster, title, stacks, description, codeLink, projectLink }) => {
    return (
        <div>
            <div className='w-[400px] bg-alfan-black shadow-lg shadow-slate-800 pb-12 rounded overflow-hidden'>
                <img src={urlFor(poster)} alt={title} />
                <div>
                    <div className='text-2xl text-alfan-white text-center font-semibold mt-4 tracking-wider'>{title}</div>
                    <div className='bg-alfan-yellow h-1 w-16 mx-auto mt-4'></div>
                    <div className='mt-4 text-alfan-white px-12 tracking-wider'>{description}</div>
                    <div className='mt-4'>
                        <div className='text-center text-alfan-white'>Stack</div>
                        <div className='flex items-center justify-evenly flex-wrap px-12 mt-2'>
                            {
                                stacks.map((stack, index) => (
                                    <span key={index} className='text-alfan-brown'>{stack}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-evenly mt-8 px-12'>
                        <a href={codeLink} target='_blank' className='bg-alfan-brown text-alfan-white py-2 px-4 rounded-lg'>Code</a>
                        <a href={projectLink} target='_blank' className='bg-alfan-brown text-alfan-white py-2 px-4 rounded-lg'>Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard