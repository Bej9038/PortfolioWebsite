import React from 'react';
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItem from "../Components/MenuItem";

function PortfolioPage() {
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'}/>
            </div>
            <div className="portfolio-menu">
                <Categories/>
                <MenuItem/>
            </div>
        </div>
    );
}

export default PortfolioPage;
