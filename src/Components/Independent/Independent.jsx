import React from 'react'
import './Independent.css'
import matze from '../Images/matze.jpg'

function Independent() {
    return (
        <div>
            <section className='bg-white'>
                <div class=" text-center " id='containerIndependent' >
                    <div class="row" id='row'>
                        <div class="col">
                            <img src={matze} alt='ceo' className='w-100 position' />
                            <div className='ceo'>
                                <p className='fw-smbold'>Mathias Henze</p>
                                <p className='fw-light'>CEO and founder of Jimdo</p>
                            </div>
                            
                        </div>
                        <div class="col" id='independent'>
                            <div className='independent'>
                                <h1 className='py-4' ><span>Independent</span> but not <br/>alone</h1>
                                <p className="fw-light">We’re passionate about self-employed small business<br/>
                                owners like you. Helping you harness your power and<br/>
                                thrive online has been our mission from the beginning.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Independent