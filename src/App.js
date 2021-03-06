import './App.scss';
import './Styles/Layout.scss';
import './Styles/NavBar.scss';
import './Styles/HomePage.scss';
import './Styles/Title.scss';
import './Styles/Skills.scss';
import './Styles/AboutPage.scss';
import './Styles/ContactPage.scss';
import './Styles/PortfolioPage.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import {Switch, Route, NavLink} from 'react-router-dom';
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import React, {useState} from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import ScrollToTop from "./Components/ScrollToTop";

function App() {
    const [navToggle, setNavToggle] = useState(false);
    const navClick = () =>
    {
        if(window.innerWidth < 1000)
        {
            setNavToggle(!navToggle);
        }
    }

  return (
    <div className="App">
        <div className="nav-">
            <Switch>
                <Route path="/" exact>
                    <NavLink className = "rightarrow" to="/About" exact>
                        <FaArrowRight />
                        <FaArrowRight className = "rightarrow2"/>
                    </NavLink>
                </Route>

                <Route path="/About" exact>
                    <NavLink className = "leftarrow" to="/" exact>
                        <FaArrowLeft />
                        <FaArrowLeft className = "leftarrow2"/>
                    </NavLink>
                    <NavLink className = "rightarrow" to="/Portfolio" exact>
                        <FaArrowRight />
                        <FaArrowRight className = "rightarrow2"/>
                    </NavLink>
                </Route>

                <Route path="/Portfolio" exact>
                    <NavLink className = "leftarrow" to="/About" exact>
                        <FaArrowLeft />
                        <FaArrowLeft className = "leftarrow2"/>
                    </NavLink>
                    <NavLink className = "rightarrow" to="/Contact" exact>
                        <FaArrowRight />
                        <FaArrowRight className = "rightarrow2"/>
                    </NavLink>
                </Route>

                <Route path="/Contact" exact>
                    <NavLink className = "leftarrow" to="/Portfolio" exact>
                        <FaArrowLeft />
                        <FaArrowLeft className = "leftarrow2"/>
                    </NavLink>
                </Route>

            </Switch>
        </div>



      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
            <Switch>
                <Route path="/" exact>
                    <ScrollToTop/>
                    <HomePage />
                </Route>

                <Route path="/About" exact>
                    <ScrollToTop/>
                    <AboutPage />
                </Route>

                <Route path="/Portfolio" exact>
                    <ScrollToTop/>
                    <PortfolioPage />
                </Route>

                <Route path="/Contact" exact>
                    <ScrollToTop/>
                    <ContactPage />
                </Route>
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
