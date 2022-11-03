import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getAuth } from '../../api/spotifyAuth';

const ProtectedRoute = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("access-token"));

    console.log(token);

    useEffect(() => {
        const hash = window.location.hash;
        window.location.hash = "";

        if (!token) {
            getAuth().then(accessToken => {
                setToken(accessToken);
                window.localStorage.setItem("access-token", accessToken);
            });
        }
        else {
            setToken(token);
        }

    }, [])

    if (!token) {
        return (
             <Navigate to='/login' />
        )
    }
    return children;
}

export default ProtectedRoute