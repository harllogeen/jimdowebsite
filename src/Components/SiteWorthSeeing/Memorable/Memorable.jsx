import React from 'react'
import './Memorable.css'
import logo_1 from '../../Images/logo_1.png'
import logo_2 from '../../Images/logo_2.png'
import logo_3 from '../../Images/logo_3.png'
import logo_4 from '../../Images/logo_4.png'
import logo_5 from '../../Images/logo_5.png'

function Memorable() {
    return (
        <div>
            <section>
                <div className='text-center '>
                    <h1 className='fs-1  py-4' >Make it <span>memorable</span>
                        <br />With a free logo</h1>
                    <p className='text-center fw-light'>You're building your brand—now get a logo to match. Use our Logo Creator to design your<br />
                        own business logo and download all the files you need for digital and print. It's free to <br />use.</p>
                    <div className='text-center '>
                        <h4 className='create'>How to create a website  <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
                    </div>

                </div>
                <div class="container text-center memorableImage">
                    <div class="row">
                        <div class="col">
                            <img src={logo_1} alt='logo_1' />
                        </div>
                        <div class="col"> <img src={logo_2} alt='logo_2' /></div>
                        <div class="col"> <img src={logo_3} alt='logo_3' /></div>
                        <div class="col"> <img src={logo_4} alt='logo_4' /></div>
                        <div class="col"> <img src={logo_5} alt='logo_4' /></div>
                    </div>
                    <button className='CreateWebsiteTodayBtn bg-transparent text-primary border border-primary'>Try it free</button>
                </div>
               
            </section>
        </div>
    )
}

export default Memorable