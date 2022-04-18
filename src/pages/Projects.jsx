import React, { useEffect, useState } from 'react'
import { client } from '../client';
import { Container, ProjectCard, SectionDevider, SectionTitle } from '../components'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const query = '*[_type == "projects"]';

        client.fetch(query).then((data) => {
            setProjects(data);
        });
    }, []);

    return (
        <div id='projects'>
            <Container>
                <SectionDevider />
                <SectionTitle title='Projects' />
                <div className='px-20 flex flex-wrap gap-8'>
                    {
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                poster={project.imgUrl}
                                title={project.title}
                                description={project.description}
                                stacks={project.stacks}
                                codeLink={project.codeLink}
                                projectLink={project.projectLink}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Projects