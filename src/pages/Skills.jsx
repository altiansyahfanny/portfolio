import React from 'react'
import { css, figma, git, html, javascript, laravel, php, react, redux, tailwind } from '../assets'
import { Container, SectionDevider, SectionTitle, SklillPills } from '../components'

const Skills = () => {
    return (
        <div id='skills'>
            <Container>
                <SectionDevider />
                <SectionTitle title='Skills & Experiences' />
                <div className='w-full flex justify-center'>
                    <div className='w-96 grid grid-cols-3 pb-4'>
                        <SklillPills icon={html} title='HTML' />
                        <SklillPills icon={css} title='CSS' />
                        <SklillPills icon={tailwind} title='Tailwind' />
                        <SklillPills icon={php} title='PHP' />
                        <SklillPills icon={javascript} title='JavaScript' />
                        <SklillPills icon={react} title='React' />
                        <SklillPills icon={redux} title='Redux' />
                        <SklillPills icon={laravel} title='Laravel' />
                        <SklillPills icon={git} title='GIT' />
                        <SklillPills icon={figma} title='Figma' />
                    </div>
                    <div className='w-[2px] bg-alfan-white' />
                    <div className='p-4'>
                        <div>
                            <span className='block text-cyan-500 font-bold'>2021 - Now</span>
                            <span className='text-alfan-white'>Programmer CV. YASSA PRATAMA ABADI</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills