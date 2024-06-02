import React from 'react';
import backgroundImage from '../images/gentleman-slider.png';
function Slider() {
    return (
        <div className="sidebar-wrapper mobile-height">
            <div 
                className="wow animate__fadeIn p-0 parallax sm-background-image-center h-1/2" 
                data-parallax-background-ratio="0.5" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="container full-screen position-relative">
                    <div className="row mt-14 h-100 align-items-center">
                        <div className="col-xl-6 col-md-10 offset-xl-4 offset-md-1 text-center text-lg-start bg-white-opacity padding-six-all lg-padding-eight-all rounded-xl">
                            <div className="alt-font text-extra-dark-gray text-uppercase font-weight-700 letter-spacing-minus-2 title-large text-center">Build your website</div>
                            <div class="separator-line-horrizontal-full w-80 margin-35px-tb md-margin-25px-tb sm-margin-20px-tb bg-extra-dark-gray mx-auto"></div>
                            <span class="text-dark-gray text-extra-large font-weight-300 margin-35px-bottom d-block md-margin-25px-bottom sm-margin-15px-bottom text-center">We're a design studio that believe in the power of great ideas.</span>
                            <div className='flex justify-center'>
                            <a href="https://1.envato.market/g7jrr" target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded shadow no-underline">Contact Now</a>
                        </div>
                        </div>

                        <div className="down-section text-center">
                            <a href="#why" className="section-link up-down-ani"><i className="ti-mouse icon-small bounce text-deep-pink"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
