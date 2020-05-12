import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area ">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-2">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="img/logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-7">
                                        <div className="main-menu   d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="index.html">home</a></li>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="Recipes.html">Recipes</a></li>
                                                    <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                        <ul className="submenu">
                                                            <li><a href="#">blog</a></li>
                                                            <li><a href="#">single-blog</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="search_icon">
                                            <a href="#">
                                                <i className="ti-search"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="bradcam_area bradcam_bg_1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">
                                    <h3>About Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
