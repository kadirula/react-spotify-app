import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getAuth } from '../../api/spotifyAuth';

const ProtectedRoute = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("access-token"));

    useEffect(() => {
        const hash = window.location.hash;
        window.location.hash = "";

        if (token == null && hash) {
            getAuth().then(accessToken => {

                console.log(accessToken);

                setToken(accessToken);
                window.localStorage.setItem("access-token", accessToken);
            });
        }
        else {
            setToken(token);
        }

    }, [])

    console.log(token);

    // if (token == null) {
    //     return (
    //         <Navigate to='/login' />
    //     )
    // }
    return children;
}

export default ProtectedRoute