import React from 'react';
import './ListItems.css';

interface PropsModel {
    text: string;
    onDelete: () => void;
    onClick: () => void;
}

export default ({text, onDelete, onClick}: PropsModel) => {
    return(
        <div className = "Container">
        <div className = "Title">
            {text}
        </div>
        <button className = "DeleteButton" onClick={onDelete}>Delete</button>
        </div>
    );
}