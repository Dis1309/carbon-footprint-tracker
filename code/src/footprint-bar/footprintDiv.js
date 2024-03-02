import React from 'react';
import footprintSvg from './footprint.svg';
import './footprint.css'

export default function FootprintDiv({fillPercentage}) {
    const style = {
        height: `${fillPercentage*2}px`
    }
    console.log(style.height)
    return (
        <div className='image-prop-container' style={style}>
            <img className='image-prop' src={footprintSvg} alt="footprint"/>
        </div>
    );
};