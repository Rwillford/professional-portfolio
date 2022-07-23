import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props){
    const {
        projects = [],
        setCurrentProject,
        currentProject,
        contactSelected,
        setContactSelected,
    } = props;
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    About Me    
                    </a>
                </li>
                {projects.map((project) => (
                    <li className={`mx-1 ${currentProject.name === project.name && !contactSelected && 'navActive'}`} key={project.name}>
                        <span onClick={() => {setCurrentProject(project);setContactSelected(false);}}>
                            {capitalizeFirstLetter(project.name)}
                        </span>
                    </li>
                ))}
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>
                        Contact
                    </span>
                </li>
                <li className="mx-2">
                    <a href="#resume">
                    Resume    
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}

export default Nav;