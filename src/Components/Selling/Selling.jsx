import './Selling.css'
import React from 'react'
import shop from '../Images/shop.jpg'


function Selling() {
    return (

        <div id='selling'>
            <div className="row">
                <div className="col" id='col'>
                    <h1><span>Selling</span> made simple</h1>
                    <p className='fw-light'>Create an independent online-store-hassle-free</p>
                    <div className='simple'>
                        <p className=' d'><i class="fa fa-check" aria-hidden="true"></i> No transaction fees (your products, your profit)</p>
                        <p><i className="fa fa-check" aria-hidden="true"></i> Offer shipping and local pickup options</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i> Book appointments right on your site</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i> Take payments via PayPal or Stripe</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i> Manage all your orders in one place</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i> Sell on Instagram and Facebook</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i> Boost your store with sales & discounts</p>
                        <button className='CreateWebsiteTodayBtns'>Let's get started</button>
                        <div className='create'>
                            <h4>How to create an online store  <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={shop} alt="shop" className='shopImage' />
                </div>
            </div>

        </div>

    )
}

export default Selling