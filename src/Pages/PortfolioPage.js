import React from 'react';
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItem from "../Components/MenuItem";
import portfolios from "../Components/PortfolioList"
import {useState} from 'react'

let allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfolioPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>
    {
        if(category === 'All')
        {
            setMenuItems(portfolios);
            return;
        }
        const filteredData = portfolios.filter((item)=>
        {
            return item.category === category;
        });
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} progress={75}/>
            </div>
            <div className="portfolio-menu">
                <Categories categories = {categories} filter={filter} />
                <MenuItem menuItem={menuItems}/>
            </div>
        </div>
    );
}

export default PortfolioPage;
