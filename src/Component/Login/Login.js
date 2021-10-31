import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-section">
            <h1 className="mt-5 my-3">Please Login</h1>
            <button className="login-button my-2" type="submit" onClick={handleGoogleLogin}>Login With Google</button>
            <p className="my-3">New to Adventure World? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;