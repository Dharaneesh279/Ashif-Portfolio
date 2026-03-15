import React from "react";
import "./onam.css";

const videos = [
  "OnamLoop1.mp4",
  "OnamLoop2.mp4",
  "OnamLoop3.mp4",
  "OnamLoop4.mp4",
  "OnamLoop5.mp4",
];

const DUPLICATED = [...videos, ...videos];
const REVERSED = [...videos].reverse();
const DUPLICATED_REVERSE = [...REVERSED, ...REVERSED];

const Onam = () => {
  return (
    <div className="onam">
      <p className="onamTxt">
        Onam <br /> series.
      </p>

      <p className="onamDes">
        This Onam series was edited to preserve the essence of nostalgia —
        the warmth of tradition, the softness of light, and the beauty of
        Kerala’s festive culture.
      </p>

      {/* FORWARD LOOP */}
      <div className="onam-slider">
        <div className="onam-track forward">
          {DUPLICATED.map((v, i) => (
            <div className="card" key={i}>
              <video
                src={`/video/${v}`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* REVERSE LOOP */}
      <div className="onam-slider">
        <div className="onam-track reverse">
          {DUPLICATED_REVERSE.map((v, i) => (
            <div className="cardReverse" key={i}>
              <video
                src={`/video/${v}`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onam;