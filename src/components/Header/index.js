import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { categories = [], currentCategory, setCurrentCategory, contactSelected, setContactSelected } = props
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/"><span>Robert Willford</span></a>
            </h2>

            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
    )
}

export default Header;