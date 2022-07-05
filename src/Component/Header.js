import React from 'react';
import logo from '../Component/images/nexus.png';

function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo" />;
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">ToDoList</a></li>
                </ul>
        </nav>

    );
} export default Header;