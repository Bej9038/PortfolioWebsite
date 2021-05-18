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
import {Switch, Route} from 'react-router-dom';
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import {useState} from 'react'
import { FaBars } from 'react-icons/fa';

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
        <FaBars className="nav-btn" onClick={navClick}>
        </FaBars>
      <div onClick={navClick} className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
            <Switch>
                <Route path="/PortfolioWebsite" exact>
                    <HomePage />
                </Route>

                <Route path="/About" exact>
                    <AboutPage />
                </Route>

                <Route path="/Portfolio" exact>
                    <PortfolioPage />
                </Route>

                <Route path="/Contact" exact>
                    <ContactPage />
                </Route>
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
