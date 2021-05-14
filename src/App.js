import './App.scss';
import './Styles/Layout.scss';
import './Styles/NavBar.scss';
import './Styles/HomePage.scss';
import './Styles/Title.scss';
import './Styles/Skills.scss';
import './Styles/AboutPage.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';

import {Switch, Route} from 'react-router-dom';
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
            <Switch>
                <Route path="/" exact>
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
