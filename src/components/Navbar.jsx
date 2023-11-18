import React from 'react';
import {Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav>
                <h2>The Wall of Projects</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/wall">The Wall</Link>
                    </li>
                    <li>
                        <Link to="/contribuotrs">Star Contributors</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
