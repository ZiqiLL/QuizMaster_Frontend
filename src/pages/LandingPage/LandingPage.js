import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const LandingPage = () => {

    const navigate = useNavigate(); // Initialize the navigate function
    const handleButtonClick = (destination) => {
        if (destination === 'signup') {
            navigate('/signup'); // Navigate to the '/get-started' route
        } else if (destination === 'login') {
            navigate('/login'); // Navigate to the '/sign-up' route
        }
    };

    return (
        <div>
            <div>
                <h1>Quiz Master</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit pharetra mollis sit aliquam sit nullam.</p>
            </div>
            <div>
                <Button text="Get Started" type="primary" onClick={() => handleButtonClick('signup')} />
                <Button text="Sign Up" type="secondary" onClick={() => handleButtonClick('login')} />
            </div>
        </div>
    );
};

export default LandingPage;
