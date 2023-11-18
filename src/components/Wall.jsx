import React from 'react'
import projects from '../projects/projects'
import './Components.css'
import ProjectDetials from './ProjectDetials'
function Wall() {
    return (
        <div>
            <h1 className='pageTitle'>The Wall</h1>
            <div id="projectList">
                <button className="btn" id="addProjectBtn">
                    <a href="https://github.com/MrAshwin2142/The-Wall-of-Projects/blob/main/CONTRIBUTE.md" target="_blank">ADD NEW PROJECT!</a>
                </button>
                {
                    projects.map((project) => (
                        <button
                            className='btn'
                            key={project.name}
                            title={project.usedTech}
                            onClick={(project)=>(
                                alert("you have to design project detials section")
                            )}
                            >
                            {project.name}
                        </button>
                    ))
                }

            </div>
            <h1>this is beta version many updates are coming in future soon ..</h1>
        </div>
    )
}

export default Wall
