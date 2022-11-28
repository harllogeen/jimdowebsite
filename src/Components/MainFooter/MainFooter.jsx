import React from 'react';
import './MainFooter.css'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa"


const Footer = () => {
    return (
        <div>
            <div className="footer">

                <div className="box-container">
                    <div className="box">

                        <h1 id='jimdoLogo'>JIMDO</h1>
                        <div className='icons d-flex pe-3 justify-content-around'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitch />
                            <FaGithub />
                            <FaTwitter />
                        </div>


                    </div>

                    <div className="box">
                        <p>Products</p>
                        <li to="#/">Website</li>
                        <li to="#/">Online Store</li>
                        <li to="#/"> Online Store</li>
                        <li to="#/"> Logo</li>


                    </div>

                    <div className="box">
                        <p>About us</p>
                        <li to="#/">  About Jimdo</li>
                        <li to="#/"> Jobs</li>
                        <li to="#/"> Affiliates</li>
                    </div>
                    <div className="box">

                        <p>Service</p>
                        <li to="#/">  Jimdo Blog</li>
                        <li to="#/"> Inspiration</li>
                        <li to="#/"> Help Center</li>
                        <li to="#/"> Contact Support</li>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <div class="credits"> created by <span>oluwaseyialugbin@gmail.com</span> | all rights reserved </div>
                </div>
            </div>

        </div>


    )
}

export default Footer