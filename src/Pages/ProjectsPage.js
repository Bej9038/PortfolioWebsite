import React from 'react';
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItem from "../Components/MenuItem";
import portfolios from "../Components/ProjectList"
import {useState} from 'react'

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
let cats = []
portfolios.map(item => item.category.map(i => cats.push(i)))
let allCategories = ['All', ...cats.filter(onlyUnique)]
function ProjectsPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);
    const [id, setId] = useState(-1);

    const filter = (category) =>
    {
        if(category === 'All')
        {
            setMenuItems(portfolios);
            return;
        }
        const filteredData= portfolios.filter((item)=>
        {
            return item.category.includes(category);
        });
        setMenuItems(filteredData);
    }

    return (
        <div className="ProjectsPage">
            <div className="title">
                <Title title={'Projects'} progress={75}/>
            </div>
            <div className="portfolio-menu">
                {/*<Categories categories = {categories} filter={filter} />*/}
                <MenuItem menuItem={menuItems} id={id} setId={setId}/>
            </div>
        </div>
    );
}

export default ProjectsPage;
