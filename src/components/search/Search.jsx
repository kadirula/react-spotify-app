import React from './search.scss';
import { useState } from 'react';
import { fetchFromURL } from '../../api/spotify';
import { BiSearch } from '../../utils/icon';
import { setAlbum, setArtist, setPlaylist, setTrack } from '../../redux/reducers/spotifyReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const {artists, albums, playlists, tracks} = useSelector(state => state.spotify);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const types = 'album%2Cartist%2Cplaylist%2Ctrack'

        fetchFromURL(`search?query=${searchText}&type=${types}`).then(res => {
            if (res.status) {
                res.data.albums && dispatch(setAlbum(res.data.albums));
                res.data.artists && dispatch(setArtist(res.data.artists));
                res.data.playlists && dispatch(setPlaylist(res.data.playlists));
                res.data.tracks && dispatch(setTrack(res.data.tracks));
            }
            else {
                if (res.statusCode === 401) {
                    localStorage.removeItem('access-token')
                    navigate('/login')
                  }
            }
        })
    }

    

    return (
        <form className='search' onSubmit={(e) => handleSubmit(e)}>
            <div className="search__item">
                <input
                    type="text"
                    placeholder='Search...'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button><BiSearch /></button>
            </div>
        </form>
    )
}

export default Search