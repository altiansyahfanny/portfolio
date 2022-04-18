import React from 'react'
import { Container, SectionDevider, SectionTitle, Subtitle } from '../components'

const About = () => {
    return (
        <div id="about">
            <Container>
                <SectionDevider />
                <SectionTitle title='About Me' />
                <div className='w-9/12'>
                    <Subtitle>
                        Hai, my name is Altiansyah Fanny, I am a web developer. Now I live in Banjarmasin, South Kalimantan. When I was in high school, I didn't have an interest in software development, but I did have an interest in computers. However, over time I became more and more interested in web development, especially during college. I study at Budi Luhur University which is located in Jakarta. I finished my college education in 2020.

                        <br /><br />

                        I'm currently exploring how to become a frontend developer and currently deepening my knowledge of javascript and reactJS.
                    </Subtitle>
                </div>
            </Container>
        </div>
    )
}

export default About