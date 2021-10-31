import React from 'react';
import './SignUp.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const SignUp = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="signup-section">
            <h1 className="mt-5 my-3">Please Sign Up</h1>
            <button className="my-2 signup-button" type="submit" onClick={handleGoogleSignUp}>SignUp with Google</button>
            <p className="my-3">Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;