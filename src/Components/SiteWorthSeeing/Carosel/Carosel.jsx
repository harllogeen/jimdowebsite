import React, { Component } from "react";
import Slider from "react-slick";
import './Carosel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pics1 from '../../Assets/images/pics1.jpg'
import pics2 from '../../Assets/images/pics2.jpg'
import pics3 from '../../Assets/images/pics3.jpg'
import pics4 from '../../Assets/images/pics4.jpg'
import pics5 from '../../Assets/images/pics5.jpg'
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
       autoplay: true,
      speed: 4000,
      // autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={pics1} alt="mobile1" />
          </div>
          <div>
            <img src={pics4} alt="mobile4" className="websiteImg" />
          </div>

          <div>
            <img src={pics3} alt="mobile3" />
          </div>
          <div>
            <img src={pics2} alt="mobile2" />
          </div>
          <div>
            <img src={pics5} alt="mobile5" className="websiteImg" />
          </div>
        </Slider>
      </div>
    );
  }
}