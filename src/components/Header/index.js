import Reach from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/"><span>Robert Willford</span></a>
            </h2>

            <Nav></Nav>
        </header>
    )
}

export default Header;