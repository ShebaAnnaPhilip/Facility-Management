import React from 'react';
import './Card.css';

export default function Card({topLabel,bottomLabel}) {
    return (
        <div className="cards-main">
        <div className="card">
            <p className="top-label">{topLabel}</p>
            <p className="bottom-label">{bottomLabel}</p>
          
        </div>
    </div>
        
    )
}
