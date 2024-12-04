import React from 'react';

// Customized Button component
const Button = ({ text, onClick, type = 'primary' }) => {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
