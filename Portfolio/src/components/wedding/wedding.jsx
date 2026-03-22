import React, { useState, useRef } from 'react';
import './wedding.css';
import LazyVideo from "../LazyVideo/LazyVideo";

const videos = [
  { src: "/video/Wedding1.mp4", poster: "/img/Wedding1-TN-New.jpeg" },
  { src: "/video/Wedding2.mp4", poster: "/img/Wedding2-TN-New.jpeg" },
  { src: "/video/Wedding3.mp4", poster: "/img/Wedding3-TN-New.jpeg" },
  { src: "/video/Wedding4.mp4", poster: "/img/Wedding4-TN-New.jpeg" },
];

const Wedding = () => {
  const [index, setIndex]               = useState(0);
  const [anim, setAnim]                 = useState('');
  const [displayIndex, setDisplayIndex] = useState(0);
  const animating                       = useRef(false);

  const maxIndex = videos.length - 1;

  const slide = (dir) => {
    if (animating.current) return;
    if (dir === 'right' && index >= maxIndex) return;
    if (dir === 'left'  && index <= 0) return;

    animating.current = true;
    const nextIndex = dir === 'right' ? index + 1 : index - 1;

    setAnim(dir === 'right' ? 'exit-left' : 'exit-right');

    setTimeout(() => {
      setDisplayIndex(nextIndex);
      setIndex(nextIndex);
      setAnim(dir === 'right' ? 'enter-right' : 'enter-left');

      setTimeout(() => {
        setAnim('');
        animating.current = false;
      }, 380);
    }, 380);
  };

  const canLeft  = index > 0;
  const canRight = index < maxIndex;

  return (
    <div className="wedding">
      <div className = "wedding-image">
        <img src="/img/Wedding-Pic.jpeg"/>
      </div>
      <div className="wedding-caption">
        <h1 className="wedding-title">“Where Love<br/>Becomes Cinema”</h1>
        <p className="wedding-des">Every wedding is a story of love, culture,<br/>and unforgettable momentscrafted into<br/> timeless cinematic memories.</p>
      </div>
      <div className="wedding-carousel-wrapper">

        <button
          className={`wedding-arrow wedding-arrow--left ${!canLeft ? 'wedding-arrow--disabled' : ''}`}
          onClick={() => slide('left')}
          aria-label="Previous video"
          disabled={!canLeft}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div className="wedding-video-stage">
          <div className={`wedding-video-track ${anim}`}>
            <LazyVideo
              src={videos[displayIndex].src}
              poster={videos[displayIndex].poster}
            />
          </div>
        </div>

        <button
          className={`wedding-arrow wedding-arrow--right ${!canRight ? 'wedding-arrow--disabled' : ''}`}
          onClick={() => slide('right')}
          aria-label="Next video"
          disabled={!canRight}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

      </div>

      <div className="wedding-dots">
        {videos.map((_, i) => (
          <span
            key={i}
            className={`wedding-dot ${i === index ? 'wedding-dot--active' : ''}`}
            onClick={() => {
              if (!animating.current && i !== index)
                slide(i > index ? 'right' : 'left');
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default Wedding;