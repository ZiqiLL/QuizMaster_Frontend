import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            {/* Sidebar */}
            <SideBar />

            {/* Features Section */}
            <div style={styles.features}>
                <FeatureCard
                    title="Feature 1"
                    description="Create quizzes by uploading files"
                    onClick={() => navigate('/create-quiz')}
                />
                <FeatureCard
                    title="Feature 2"
                    description="Let AI explain a concept to you"
                    onClick={() => navigate('/explain-concept')}
                />
                <FeatureCard
                    title="Feature 3"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    onClick={() => navigate('/feature-3')}
                />
                <FeatureCard
                    title="Feature 4"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    onClick={() => navigate('/feature-4')}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    features: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '20px',
        flexGrow: 1,
        marginLeft: '200px', // Adjust for the sidebar
    },
};

export default HomePage;
