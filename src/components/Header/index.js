import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { contactSelected, setContactSelected } = props
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/"><span>Robert Willford</span></a>
            </h2>

            <Nav
                
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
    )
}

export default Header;