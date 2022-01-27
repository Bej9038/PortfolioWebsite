import React from 'react';
import avatar from '../Images/newsmaller.jpg';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">

                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>

                <ul className="nav-items">
                    <lin className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </lin>
                    <lin className="nav-item">
                        <NavLink to="/About" exact activeClassName="active">
                            About
                        </NavLink>
                    </lin>
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
