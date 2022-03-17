import React from 'react';
import './Navbar.css'
const Navbar = props => {
    return (
        <div class="navbar">
            <p className='brand'> Brand</p>
            <ul className='navigation'>
                <li>About</li>
                <li>Work</li>
                <li>Resume</li>
            </ul>
        </div>
    );
};


export default Navbar;