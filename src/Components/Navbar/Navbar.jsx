import React from 'react'
import './Navbar.css'
import '../../index.css'

function Navbar() {
    return (
        <div >
            <div className='navbar  fixed-top'>
                <h1 className='jimbo'>JIMDO</h1>
                <nav>
                    <li className='product'>Product  <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Inspiration</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Features</li>

                </nav>
                <nav>
                    <li className='product'>Help <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Login</li>
                </nav>
            </div>
        </div>
    )
}

export default Navbar