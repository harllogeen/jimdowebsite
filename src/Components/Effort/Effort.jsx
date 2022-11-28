import React from 'react'
import './Effort.css'
import '../../index.css'
import load from '../Gif/load.gif'

function Effort() {
    return (
        <div>
            <section>
                <div className='text-center '>
                    <h1 className='fs-1  fw-smbold py-4' ><span>Websites</span> Without the effort</h1>
                    <p className='text-center fw-light'>Design your website exactly how you want it-we provide everything you need to get <br/>started</p>
                </div>
                <div class="grid text-center common "  >
                    <div class="g-col-2">
                        <img src={load} alt="load" />
                    </div>
                    <div class="g-col-2" id='effort'>
                        <div className=''>
                            <p className=' d'><i class="fa fa-check" aria-hidden="true"></i> Make chages any time</p>
                            <p><i className="fa fa-check" aria-hidden="true"></i> Add your own images and text</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i> Free image library and photo editing</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i> Flexible layouts</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i> Mobile-optimized for all screens</p>
                            <div className='create'>
                                <h4>How to create a website  <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Effort