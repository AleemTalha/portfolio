import React, { useEffect, useState } from 'react';
import './progress.css';

const ProgressCircle = ({ percentage, text, icon }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    setCurrentPercentage(percentage);
  }, [percentage]);

  const strokeDashoffset = 450 - (450 * currentPercentage) / 100;

  return (
    <div className="container m-0 p-0 mt-3 progress-skill">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="content">
              <div className="icon-text">
              <i className={`fs-3 ${icon}`}></i>
                <span className="skill-text">{text}</span>
              </div>
              <div id="number">{currentPercentage}%</div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#13598f" />
              <stop offset="100%" stopColor="Navy" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            stroke="url(#GradientColor)"
            strokeWidth="15"
            strokeDasharray="450"
            style={{
              strokeDashoffset: strokeDashoffset,
            }}
            className="circle"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressCircle;
