import axios from 'axios';
import qs from 'qs';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const scopes = [
    'user-read-playback-state',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-follow-read',
    'user-read-currently-playing',
    'user-read-email',
    'user-top-read',
    'user-read-recently-played',
    'user-read-private',
    'user-library-read',
    'user-read-playback-position'
];

export const loginUrl =
    `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;


export const getAuth = async () => {

    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: clientId,
            password: clientSecret,
        },
    };
    
    const data = {
        grant_type: 'client_credentials',
    };

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            qs.stringify(data),
            headers
        );
        localStorage.removeItem("access-token")
        localStorage.setItem("access-token",response.data.access_token)
        return response.data.access_token;
    } catch (error) {
        console.log(error);
    }
};