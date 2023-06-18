import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from 'react'


function MenuItem({menuItem, id, setId}) {
    const [expanded, setExpanded] = useState(false);
    const [previousWindowPos, setPrev] = useState(0);

    function customScroll()
    {
        // let interval = setInterval(function ()
        // {
        //     if(window.scrollY > 0)
        //     {window.scroll({top: window.scrollY-1, behavior: 'instant'})}
        //     else
        //     {
        //         clearInterval(interval)
        //     }
        //
        // }, 1);
        while(window.scrollY > 0)
        {
            window.scroll({top: window.scrollY-1, behavior: 'instant'})
            // setTimeout(() => {
            //     window.scroll({top: window.scrollY-1, behavior: 'instant'})
            // }, 1);

        }
    }
    return (
        // <div className={`MenuItem ${expanded? 'collapsedGrid' : ''}`}>
        <div className={`MenuItem`}>
            {
                menuItem.map((item) =>
                {
                    // if(id === -1 || item.id === id) {
                        return <div className={`portfolio ${expanded && item.id !== id ? 'fadeout' : 'fadein'}`} key={item.id}>
                            <h5 className={`${id === -1 || item.id === id ? '' : 'collapsed'}`}>
                                {item.title}
                            </h5>
                            <div className={`project-content ${expanded ? 'expanded' : ''} ${id === -1 || item.id === id ? '' : 'collapsed'}`}>
                                {/*<img className="img" src={item.image} alt=""/>*/}
                                <div className="text-cover"></div>
                                <p className={`${id === -1 || item.id === id ? '' : 'collapsed'}`}>
                                    {item.description}
                                </p>
                                <button className={`${id === -1 || item.id === id ? '' : 'collapsed'}`} onClick={() => {
                                    if(!expanded)
                                    {
                                        // setPrev(window.scrollY)
                                        // window.scroll({top: 0, behavior: 'instant'})
                                        setId(item.id);
                                        setExpanded(true);

                                    }
                                    else
                                    {
                                        setId(-1);
                                        setExpanded(false);
                                        // window.scroll({top: previousWindowPos, behavior: 'instant'})

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
                    // }
                    // else
                    // {
                    //     return <div></div>
                    // }
                })
            }
        </div>
    );
}

export default MenuItem;
