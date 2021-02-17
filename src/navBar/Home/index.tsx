import React from 'react';
import ChristmasTree from './ChristmasTree.jpg';
import './HomePage.css';

export default () => {
    return (
        <div className="christmastreeContainer">
            <div>
                <img src={ChristmasTree} className="christmastree"></img>
                <div className="text">BEAUTIFUL</div>
            </div>
        </div>
    )
}