import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            storage_url: process.env.MIX_STORAGE_URL,
            app_url: process.env.MIX_APP_URL,
        }
    }

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
                                            <NavLink exact to={'/'}>
                                                <img src="img/logo.png" alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-7">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <NavLink to={'/'}>
                                                            Home
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/about'}>
                                                            About
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/recipes/'}>
                                                            Recipes
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </nav>
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
                                    <h3>AISBVU 21 restaurant</h3>
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
