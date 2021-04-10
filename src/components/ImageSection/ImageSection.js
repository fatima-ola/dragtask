import React from 'react';
import Barisal from '../../../src/assets/barisal.jpg';
import Chittagong from '../../../src/assets/Chittagong.png';
import Dhaka from '../../../src/assets/dhaka.jpg';
import Khulna from '../../../src/assets/khulna.jpg';
import Ranpur from '../../../src/assets/ranpur.jpg';
import Sylhet from '../../../src/assets/sylhet.jpg';
import Rajshahi from '../../../src/assets/rajshahi.jpg';

const ImageSection = () => {
    return (
        <div className="subdivision">
            <img src={Barisal} alt="Barisal"/>
            <img src={Chittagong} alt="Chittagong"/>
            <img src={Dhaka} alt="Dhaka"/>
            <img src={Khulna} alt="Khulna"/>
            <img src={Ranpur} alt="Ranpur"/>
            <img src={Sylhet} alt="Sylhet"/>
            <img src={Rajshahi} alt="Rajshahi"/>
        </div>
    )
}

export default ImageSection