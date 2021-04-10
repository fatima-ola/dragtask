import React from 'react';
import Sketch from '../../../src/assets/sketch.svg';


const MapSection = () => {
    return (
        <div>
            <p>Bangladeesh Map</p>
            <div className="mapimage">
                <img src={Sketch} alt="bangladesh map"/>
            </div>
        </div>
    )
}

export default MapSection
