import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {login} from "../../services/authServices";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(`Logging in with Email: ${email}, Password: ${password}`);
        const response = login(email, password)
        if(response === "successful")
            navigate('/home')
        else alert("Something is wrong")
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px' }}>
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}>
                    <Button text="Sign In" onClick={handleLogin} />
                    <Button text="Cancel" onClick={() => navigate('/')}></Button>
                </div>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <a href="/forgot-password" style={{ textDecoration: 'none', color: '#000' }}>
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
