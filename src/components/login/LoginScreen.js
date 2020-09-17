import React from 'react';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
        // hacer replace de la historia
        history.replace('/');
    }

    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-purple shadow"
                onClick={ handleLogin }
            >Ingresar</button>
        </div>
    )

}