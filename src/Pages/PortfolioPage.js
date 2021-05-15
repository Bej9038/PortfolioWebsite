import React from 'react';
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItem from "../Components/MenuItem";
import portfolios from "../Components/PortfolioList"
import {useState} from 'react'

function PortfolioPage() {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'}/>
            </div>
            <div className="portfolio-menu">
                <Categories/>
                <MenuItem menuItem={menuItems}/>
            </div>
        </div>
    );
}

export default PortfolioPage;
