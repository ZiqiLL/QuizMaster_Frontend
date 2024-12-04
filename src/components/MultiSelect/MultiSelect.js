import React from 'react';

const MultiSelect = ({ label, options, selectedOptions, onChange }) => {
    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            onChange(selectedOptions.filter((item) => item !== option));
        } else {
            onChange([...selectedOptions, option]);
        }
    };

    return (
        <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>{label}</label>
            {options.map((option) => (
                <div key={option} style={{ marginBottom: '5px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        {` ${option}`}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default MultiSelect;
