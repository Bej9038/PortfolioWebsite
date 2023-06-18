import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from 'react'


function MenuItem({menuItem, id, setId}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="MenuItem">
            {
                menuItem.map((item) =>
                {
                    if(id === -1 || item.id === id) {
                        return <div className="portfolio" key={item.id}>
                            <h5>
                                {item.title}
                            </h5>
                            <div className="project-content">
                                {/*<img className="img" src={item.image} alt=""/>*/}
                                <div className="text-cover"></div>
                                <p>
                                    {item.description}
                                </p>
                                <button onClick={() => {
                                    if(!expanded)
                                    {
                                        setId(item.id) ;
                                        setExpanded(true);
                                    }
                                    else
                                    {
                                        setId(-1);
                                        setExpanded(false);
                                    }


                                }}>Expand</button>
                                {/*<div className="hover-items">*/}
                                {/*    <a target = "_blank" href={item.link1}>*/}
                                {/*        <FontAwesomeIcon icon={item.icon1} className='icon'/>*/}
                                {/*    </a>*/}
                                {/*    {!item.link2 ? "" : <a target = "_blank" href={item.link2}>*/}
                                {/*        <FontAwesomeIcon icon={item.icon2} className='icon'/>*/}
                                {/*    </a>}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    }
                    else
                    {
                        return <div></div>
                    }
                })
            }
        </div>
    );
}

export default MenuItem;
