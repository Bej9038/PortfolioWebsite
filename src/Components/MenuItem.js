import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from 'react'
import ReactAudioPlayer from 'react-audio-player';


function MenuItem({menuItem, id, setId}) {
    const [expanded, setExpanded] = useState(true);
    return (
        <div className={`MenuItem`}>
            {
                menuItem.map((item) =>
                {
                    return <div className={`portfolio`} key={item.id}>
                        <h5>
                            {/*{!item.link ? "" : <a target = "_blank" href={item.link}>*/}
                            {/*    <FontAwesomeIcon icon={item.icon} className='icon'/>*/}
                            {/*</a>}*/}
                            <div className="title">
                                {item.title}
                            </div>
                        </h5>

                        <div style={{maxHeight: `${expanded && (id === -1 || item.id === id) ? "400vh" : "24vh"}`}} className={`project-content`}>
                            <div className={`${expanded && (id === -1 || item.id === id)? 'text-cover-plain' : 'text-cover'}`}></div>
                            {/*<button className="expand-btn" onClick={() => {*/}
                            {/*    if(!expanded)*/}
                            {/*    {*/}
                            {/*        setId(item.id);*/}
                            {/*        setExpanded(true);*/}
                            {/*    }*/}
                            {/*    else*/}
                            {/*    {*/}
                            {/*        setId(-1);*/}
                            {/*        setExpanded(false);*/}
                            {/*    }*/}
                            {/*}}>Expand</button>*/}
                            <div className="flex-container">
                                <p className="description">
                                    {item.descriptions? item.descriptions[0] ? item.descriptions[0]:"":""}
                                </p>
                                {(() => {
                                        if (item.images && item.images[0]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[0]}
                                                     alt=""/>
                                                <div
                                                    className="img-caption">{item.imagecap[0]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description">
                                    {item.descriptions? item.descriptions[1] ? item.descriptions[1]:"":""}
                                </p>
                                {/*{(() => {*/}
                                {/*        if (item.images && item.images[1]) {*/}
                                {/*            return <div>*/}
                                {/*                <img className="img"*/}
                                {/*                     src={item.images[1]}*/}
                                {/*                     alt=""/>*/}
                                {/*                <div className="img-caption">{item.imagecap[1]}</div>*/}
                                {/*            </div>*/}
                                {/*        }*/}
                                {/*    }*/}
                                {/*)()}*/}
                                {(() => {
                                    if (item.audio && item.audiocap) {
                                        return <div className="audio-container">
                                            <div>
                                                <ReactAudioPlayer className="audio-player"
                                                                  src={item.audio[0]}
                                                                  controls
                                                />
                                                <div className="audio-caption">{item.audiocap[0]}</div>
                                            </div>
                                            <div>
                                                <ReactAudioPlayer className="audio-player"
                                                                  src={item.audio[1]}
                                                                  controls
                                                />
                                                <div className="audio-caption">{item.audiocap[1]}</div>
                                            </div>
                                        </div>
                                    }
                                })()}
                                <p className="description">
                                    {item.descriptions? item.descriptions[2] ? item.descriptions[2]:"":""}
                                </p>

                                {(() => {
                                        if (item.images && item.images[2]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[2]}
                                                     alt=""/>
                                                <div className="img-caption">{item.imagecap[2]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description">
                                    {item.descriptions? item.descriptions[3] ? item.descriptions[3]:"":""}
                                </p>
                                {(() => {
                                        if (item.images && item.images[3]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[3]}
                                                     alt=""/>
                                                <div className="img-caption">{item.imagecap[3]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description">
                                    {item.descriptions? item.descriptions[4] ? item.descriptions[4]:"":""}
                                </p>
                                <p className="description">
                                    {item.descriptions? item.descriptions[5] ? item.descriptions[5]:"":""}
                                </p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default MenuItem;
