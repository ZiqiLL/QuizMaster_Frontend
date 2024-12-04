import React from 'react';

const FeatureCard = ({ title, description, onClick }) => {
    return (
        <div
            onClick={onClick} // Pass the onClick function
            style={styles.card}
        >
            <div style={styles.number}>06</div>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
        </div>
    );
};

const styles = {
    card: {
        width: '200px',
        height: '250px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9fc',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
    },
    number: {
        fontSize: '36px',
        color: '#6a5acd',
        fontWeight: 'bold',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    description: {
        fontSize: '14px',
        color: '#777',
    },
};

export default FeatureCard;
