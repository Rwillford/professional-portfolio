import React from 'react';

function Nav(props) {
    const {contactSelected, setContactSelected } = props;


    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2 navActive"><a href="#about" onClick={() => setContactSelected(false)}>About</a></li>
                <li className="mx-2 navActive"><a href="#projects" onClick={() => setContactSelected(false)}>Projects</a></li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}><a href="#contact" onClick={() => setContactSelected(true)}>Contact</a></li>
                <li className="mx-2"><a href="#resume">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Nav;