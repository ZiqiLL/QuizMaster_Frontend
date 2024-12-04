import React from 'react';

const Dropdown = ({ label, options, selectedOption, onChange }) => (
    <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>
        <select
            value={selectedOption}
            onChange={(e) => onChange(e.target.value)}
            style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
            }}
        >
            <option value="" disabled>
                Select a difficulty
            </option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;
