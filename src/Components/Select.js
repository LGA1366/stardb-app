import React from 'react';
import './Styles/Select.css'

const Select = () => {
    return (
        <div className="select-container">
            <label className="label">Sort by:</label>
            <select className="select">
                <option>Name</option>
                <option>Cost</option>
            </select>
        </div>
    );
};

export default Select;