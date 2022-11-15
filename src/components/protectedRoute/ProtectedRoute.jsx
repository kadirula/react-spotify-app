import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAuth } from '../../api/spotifyAuth';

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem("access-token"));

    useEffect(() => {
        window.location.hash = "";

        if (!token) {
            getAuth().then(accessToken => {
                setToken(accessToken);
                window.localStorage.setItem("access-token", accessToken);
                navigate('/');
            });
        }
        else {
            setToken(token);
        }

    }, [])

    // if (!token) {
    //     return (
    //          <Navigate to='/login' />
    //     )
    // }
    return children;
}

export default ProtectedRoute