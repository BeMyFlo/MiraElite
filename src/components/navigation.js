import React from 'react';
import logo from '../images/logo_mira.jpg';
import logo2x from '../images/logo_mira.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faDribbble, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
    return (
        <nav className="navbar no-margin-bottom bootsnav alt-font bg-white sidebar-nav sidebar-nav-style-1 navbar-expand-lg">
            {/* start logo */}
            <div className="col-12 sidenav-header">
                <div className="logo-holder">
                    <a href="index.html" className="d-inline-block logo">
                        <img className = 'max-w-sm: max-h-8' alt="Pofo" src={logo} srcSet={`${logo2x} 2x`} />
                    </a>
                </div>
                {/* end logo */}
            </div>
            <div className="col-12 px-0">
              <ul className="flex flex-col flex-grow space-y-7 mt-9">
                  <li className="flex items-center justify-between mr-5">
                      <a href="#" className="text-lg font-medium text-red-600 hover:underline no-underline">HOME</a>
                      <FontAwesomeIcon className="text-red-500" icon={faAngleRight} />
                  </li>
                  <li className="flex items-center justify-between mr-5">
                      <a href="#" className="text-lg font-medium text-black hover:underline no-underline">PAGES</a>
                      <FontAwesomeIcon  icon={faAngleRight} />
                  </li>
                  <li className="flex items-center justify-between mr-5">
                      <a href="#" className="text-lg font-medium text-black hover:underline no-underline">PORTFOLIO</a>
                      <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li className="flex items-center justify-between mr-5">
                      <a href="#" className="text-lg font-medium text-black hover:underline no-underline">BLOG</a>
                      <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li className="flex items-center justify-between mr-5">
                      <a href="#" className="text-lg font-medium text-black hover:underline no-underline">ELEMENTS</a>
                      <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li className="flex items-center justify-between mr-5">
                      <a href="#" className="text-lg font-medium text-black hover:underline no-underline">FEATURES</a>
                      <FontAwesomeIcon icon={faAngleRight} />
                  </li>
              </ul>
            </div>
            <div className="col-12 position-absolute top-auto bottom-0 left-0 w-100 padding-20px-bottom sm-padding-15px-bottom">
                <div className="footer-holder">
                    <form action="search-result.html" method="post" className="navbar-form no-padding search-box">
                        <div className="input-group add-on">
                            <input name="text" id="text" data-email="required" type="text" placeholder="Enter your keywords..." className="form-control" />
                            <div className="input-group-btn">
                                <button className="btn btn-default search-button" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center space-x-2 icon-social-medium margin-eleven-bottom padding-eight-top sm-padding-15px-top sm-margin-15px-bottom">
                        <a href="https://www.facebook.com/" target="_blank" className="text-link-extra-dark-gray">
                            <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="text-link-extra-dark-gray">
                            <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                        </a>
                        <a href="https://dribbble.com/" target="_blank" className="text-link-extra-dark-gray">
                            <FontAwesomeIcon icon={faDribbble} aria-hidden="true" />
                        </a>
                        <a href="https://plus.google.com" target="_blank" className="text-link-extra-dark-gray">
                            <FontAwesomeIcon icon={faGooglePlusG} aria-hidden="true" />
                        </a>
                    </div>
                    <div className="text-medium-gray text-extra-small border-top border-color-extra-light-gray padding-twelve-top sm-padding-15px-top">
                        &copy; 2024 POFO. All rights reserved
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
