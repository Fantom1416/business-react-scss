import React from 'react'
import "./Navbar.scss"

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>rise</h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="login">
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
