import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={signInUsingGoogle}>Google sign in</button>
        </div>
    );
};

export default Login;