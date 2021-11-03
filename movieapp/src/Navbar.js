import React from 'react'
import './Nav.css'

function Navbar() {
    return (
        <>
            <div>

                <div class="topnav">
                    <h2 id="toptitle">AllmoviesInfo.com</h2>
                    <input type="text" placeholder="Quick Search..." />
                    <a class="active" href="#home">Home</a>
                    <a href="#trending">Trending</a>
                    <a href="#login">Login</a>
                   
                </div>
            </div>
        </>
    )
}

export default Navbar
