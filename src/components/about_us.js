import React from 'react';
import image from '../images/aboutus.png';

function AboutUs() {
    return (
        <div className="sidebar-wrapper mobile-height mt-24">
            <div className="wow animate__fadeIn md-no-padding-bottom sm-padding-50px-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-xl-6 col-xxl-5 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                            <h5 className="alt-font font-weight-700 text-extra-dark-gray margin-20px-bottom text-uppercase">About Agency</h5>
                            <p className="mx-auto mb-0">We are idea-driven, working with a strong focus on design and user experience. Our projects should engage your audience, we want to create wonderful digital things that people love to be part of and use.</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 text-center ps-0 lg-padding-15px-left md-no-padding wow animate__fadeIn">
                            <img src={image} alt="" className="w-100"/>
                        </div>
                        <div className="col-xl-3 col-sm-6 text-center ps-0 lg-padding-15px-left md-no-padding wow animate__fadeIn" data-wow-delay="0.2s">
                            <img src={image} alt="" className="w-100"/>
                        </div>
                        <div className="col-xl-6 ps-0 lg-margin-15px-top md-no-margin-top md-no-padding-right wow animate__fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex flex-column align-content-center justify-content-center bg-extra-dark-gray padding-twelve-all md-padding-ten-all text-center text-lg-start sm-padding-five-lr sm-padding-fifteen-tb w-100 h-100">
                                <p className="text-extra-large text-medium-gray font-weight-300">We always stay with our clients and respect their business. We deliver 100% and provide instant response.</p>
                                <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <a href="about-us-simple.html" className="text-uppercase alt-font text-white-2 text-extra-small">Our Company History <i className="fa-solid fa-arrow-right-long margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default AboutUs;