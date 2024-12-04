import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* Toggle Button */}
            <button
                onClick={handleToggle}
                style={{
                    position: 'absolute',
                    left: isOpen ? '200px' : '0',
                    zIndex: 10,
                    padding: '10px',
                    backgroundColor: '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                {isOpen ? 'Close' : 'Open'}
            </button>

            {/* Sidebar */}
            {isOpen && (
                <div style={styles.sidebar}>
                    <button style={styles.button} onClick={() => navigate('/home')}>
                        Home
                    </button>
                    <button style={styles.button} onClick={() => navigate('/home')}>
                        Use Home
                    </button>
                    <button style={styles.button} onClick={() => navigate('/home')}>
                        Community (Maybe in the future)
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    sidebar: {
        width: '200px',
        backgroundColor: '#d1d1d1',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'fixed',
        left: '0',
        top: '0',
    },
    button: {
        width: '100%',
        margin: '10px 0',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Sidebar;
