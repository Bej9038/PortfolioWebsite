import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MenuItem({menuItem}) {

    return (
        <div className="MenuItem">
            {
                menuItem.map((item) =>
                {
                    return <div className = "portfolio" key={item.id}>
                        <div className="image-data">
                            <img className="img" src={item.image} alt=""/>
                            <div className="hover-items">
                                <a target = "_blank" href={item.link1}>
                                    <FontAwesomeIcon icon={item.icon1} className='icon'/>
                                </a>
                                {!item.link2 ? "" : <a target = "_blank" href={item.link2}>
                                    <FontAwesomeIcon icon={item.icon2} className='icon'/>
                                </a>}
                            </div>
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
