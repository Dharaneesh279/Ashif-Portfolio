import React from 'react';
import './watch.css';
import LazyVideo from "../LazyVideo/LazyVideo";

const Watch = () =>{
    return(
        <div className="watch">
            <p className="title">THROUGH ASHIF LENS</p>
            <h1 className="idName">Storiesbyashif</h1>
            <video src="/video/Watch_video-Home.mp4" className="watchVideo" loop autoPlay muted></video>
            <h1 className="storiesTxt">èì‹Ì˜ è¬îèœ</h1>
            <p className="dates">FILMED 22 OCTOBER 2025</p>
            <p className="storiesDes">Nestled in the serene landscapes of Kadambur Hills, Sathyamangalam, life here is a beautiful blend of nature, simplicity, and resilience.
            During the monsoon season, these hills transform — streams overflow, roads become challenging, and the rains bring both beauty and struggle.</p>
            <div className="Watchvideo-container1">
            <div className="Watchvideo-card1">
                <LazyVideo src="/video/Stories14.mp4" poster="/img/Str14-TN-New.jpeg"/>
            </div>
            <div className="Watchvideo-card1">
                <LazyVideo src="/video/Stories12.mp4" poster="/img/Str12-TN-New.jpeg"/>
            </div>
        </div>
        <div className="Watchvideo-container">
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories3.mp4" poster="/img/Str3-TN-New.jpeg"/>
            </div>
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories2.mp4" poster="/img/Str2-TN-New.jpeg"/>
            </div>
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories4.mp4" poster="/img/Str4-TN-New.jpeg"/>
            </div>

            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories8.mp4" poster="/img/Str8-TN-New.jpeg"/>
            </div>
        </div>
        </div>
    )
}

export default Watch