import React from 'react';
import avatar from '../Images/newsmaller.jpg';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <header className="hero">
                    <h1 className="hero-text">
                        <span> Ben Jordan</span>
                    </h1>

                    <p className="home-sub-text">
                        CS Master's Student at Cornell
                    </p>

                    <div className="icons">
                        <a target = "_blank" href = "https://github.com/Bej9038" className="icon-link">
                            <FontAwesomeIcon icon = {faGithub} className="icon"/>
                        </a>
                        <a target = "_blank"  href = "https://www.linkedin.com/in/ben-jordan-b745a0194/" className="icon-link">
                            <FontAwesomeIcon icon = {faLinkedin} className="icon"/>
                        </a>
                    </div>
                </header>

                <ul className="nav-items">
                    <lin className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </lin>
                    {/*<lin className="nav-item">*/}
                    {/*    <NavLink to="/About" exact activeClassName="active">*/}
                    {/*        About*/}
                    {/*    </NavLink>*/}
                    {/*</lin>*/}
                    <lin className="nav-item">
                        <NavLink to="/Portfolio" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </lin>
                    <lin className="nav-item">
                        <NavLink to="/Contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </lin>
                </ul>

                <div className="footer footer">
                    <p>
                        @2021 Ben Jordan
                    </p>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;
