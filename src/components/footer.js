import React from 'react';

function Footer() {
    return (
        <div className='sidebar-wrapper mobile-height mt-24'>
            <div className="footer-center-logo bg-light-gray padding-five-tb sm-padding-30px-tb">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="col-lg-4 col-md-5 text-small text-center alt-font sm-margin-15px-bottom">
                            &copy; 2024 POFO is Powered by <a href="http://www.themezaa.com" target="_blank" title="ThemeZaa">ThemeZaa</a>.
                        </div>
                        <div className="col-lg-4 col-md-5 text-center">
                            <span className="alt-font text-small margin-20px-right md-margin-15px-right">On social networks</span>
                            <div className="social-icon-style-8 d-inline-block align-middle">
                                <ul className="small-icon mb-0">
                                    <li><a className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                    <li><a className="twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a className="google" href="https://plus.google.com" target="_blank"><i className="fa-brands fa-google-plus-g"></i></a></li>
                                    <li><a className="instagram" href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram me-0" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Footer;
