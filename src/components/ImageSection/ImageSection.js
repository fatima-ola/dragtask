import React from 'react';
import Sketch from '../../../src/assets/sketch.png';

const ImageSection = () => {
    return (
        <div>
            <p>Bangladeesh Map</p>
            <div className="mapimage">
                <img src={Sketch} alt="bangladesh map"/>
            </div>
        </div>
    )
}

export default ImageSection