import React from 'react';

function MenuItem({menuItem}) {
    return (
        <div className="MenuItem">
            {
                menuItem.map((item) =>
                {
                    return <div className = "portfolio" key={item.id}>
                        <div className="image-data">
                            <img className="img" src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                    </div>
                })
            }
        </div>
    );
}

export default MenuItem;
