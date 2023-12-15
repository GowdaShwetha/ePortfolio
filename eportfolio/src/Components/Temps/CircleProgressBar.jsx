import React from 'react'
import "../Temps/circle.css"

const CircleProgressBar = ({percentage, circleWidth}) => {
    const radius=65;
    const dashArray =radius * Math.PI *2;
    const dashOffset =dashArray -(dashArray * percentage) / 100;
     
  return (
    <>
    <svg width={circleWidth} height={circleWidth} 
    viewBox={`0 0 ${circleWidth} ${circleWidth}`}>

        <defs>
            <linearGradient id="gradient">
            <stop offset="10%" stop-color= '#FFC000' />
           <stop offset="50%" stop-color='#FDD023'/>
           {/* <stop offset="100%" stop-color="#FF4500" /> */}
            </linearGradient>
        </defs>

    <circle 
    cx={circleWidth/2}
    cy={circleWidth/2}
    strokeWidth="10px"
    r={radius}
    class="circleBackground"/>

<circle 
    cx={circleWidth/2}
    cy={circleWidth/2}
    strokeWidth="10px"
    r={radius}
    class="progress"
    style ={{
        strokeDasharray:dashArray,
        strokeDashoffset:dashOffset,
    }}
    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth/2})`}
    stroke="url(#gradient)"
    />
    <text x="50%" y="50%" dy="0.3em" textAnchor="middle"
    class="circle-text" fill='url(#gradient)'>{percentage}%</text>
    </svg>

    </>
  )
}

export default CircleProgressBar