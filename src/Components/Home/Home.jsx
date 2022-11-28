import React from 'react'
import './Home.css';
import Effort from '../Effort/Effort';
import bgImage from '../Images/bgImage.jpg'
import CreateWebsiteToday from '../CreateWebsiteToday/CreateWebsiteToday';
import Selling from '../Selling/Selling';
import SiteWorthSeeing from '../SiteWorthSeeing/SiteWorthSeeing';
import Carosel from '../SiteWorthSeeing/Carosel/Carosel'
import Memorable from '../SiteWorthSeeing/Memorable/Memorable';
import Independent from '../Independent/Independent';
import Footer from '../Footer/Footer1/Footer';
import MainFooter from '../MainFooter/MainFooter'


function Home() {
    return (
        <div className='mt'>
            <>
                <div className='home'>
                    <div className="everything">
                        <h1>Everything for<br /> your business</h1>
                    </div>
                    <div className='buildHomeOnline'>
                        <p>Build a home online and let your customers find you.<br /> Jimdo has all the digital tools you need to do this: for<br /> example: a customized, legally safe website or an<br /> online store that's open 24/7.</p>
                        <button className='buildHomeOnlineBtn'>Start Free</button>
                    </div>
                </div>
                <div className='homeImage'>
                    <img src={bgImage} alt="BgImage" className='bgimage' />
                </div>
            </>

            <Effort />
            <CreateWebsiteToday />
            <Selling />
            <SiteWorthSeeing />
            <Carosel />
            <Memorable />
            <Independent />
            <Footer />
            <CreateWebsiteToday />
            <MainFooter />
        </div>
    )
}

export default Home