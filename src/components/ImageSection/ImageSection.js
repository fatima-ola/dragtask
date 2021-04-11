import React from 'react';
import Barisal from '../../../src/assets/barisal.jpg';
import Chittagong from '../../../src/assets/Chittagong.png';
import Dhaka from '../../../src/assets/dhaka.jpg';
import Khulna from '../../../src/assets/khulna.jpg';
import Ranpur from '../../../src/assets/ranpur.jpg';
import Sylhet from '../../../src/assets/sylhet.jpg';
import Rajshahi from '../../../src/assets/rajshahi.jpg';
import Draggable from 'react-draggable';

const ImageSection = () => {
    return (
      <div className="subdivision">
            <Draggable className="drag-wrapper">        
                <img src={Barisal} alt="Barisal" className="drag-wrapper"/>
            </Draggable>
            <Draggable>
                <img src={Dhaka} alt="Dhaka" className="drag-wrapper"/>
            </Draggable>
            <Draggable>
                <img src={Chittagong} alt="Chittagong" className="drag-wrapper"/>
            </Draggable>
            <Draggable>
                <img src={Khulna} alt="Khulna" className="drag-wrapper"/>
            </Draggable>
            <Draggable>
                <img src={Ranpur} alt="Ranpur" className="drag-wrapper"/>
            </Draggable>
            <Draggable>
                <img src={Sylhet} alt="Sylhet" className="drag-wrapper"/>
            </Draggable>
            <Draggable>
                <img src={Rajshahi} alt="Rajshahi" className="drag-wrapper"/> 
            </Draggable>
      </div>
    )
}

export default ImageSection

