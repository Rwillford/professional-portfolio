import React, { useState } from 'react';
import Nav from '../Navigation';

function Header() {
    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/">
                    <span>
                        Robert Willford    
                    </span>
                </a>
            </h1>
            <Nav
                projects={projects}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
    )
}

export default Header;