import React from 'react';
import './Input.css'

function Input({name,type, value, onChange}) {
    return (
        <div>
          <input className="input"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />  
        </div>
    )
}

export default Input
