import React from 'react';
import './Styles/Select.css'

const Select = (props) => {
    return (
        <div className="select-container">
            <label className="label">Sort by:</label>
            <select onChange={props.onChange} className="select">
                <option value={props.op1}>Name</option>
                <option value={props.op2}>Cost</option>
            </select>
        </div>
    );
};

export default Select;