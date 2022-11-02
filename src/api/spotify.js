import axios from 'axios';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;


const baseUrl = 'https://api.spotify.com/v1';

const headers = {
    headers: {
        Authorization: `Bearer ` + localStorage.getItem("access-token")
    }
}

export const fetchFromURL = async (url) => {
    try {
        const { data } = await axios.get(`${baseUrl}/${url}`, headers);

        return {
            status: true,
            data: data
        }

    } catch (err) {
        return {
            status: false,
            err: err.response
        }
    }


}