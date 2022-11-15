import React from './search.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFromURL } from '../../api/spotify';
import { BiSearch } from '../../utils/icon';
import { action } from '../../redux/actions';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const types = 'album%2Cartist%2Cplaylist'

        fetchFromURL(`search?query=${searchText}&type=${types}`).then(res => {

            if (res.status) {
                dispatch(action.site.setLoading(true))

                res.data.artists && dispatch(action.artist.setSearchArtist(res.data.artists.items));
                res.data.albums && dispatch(action.album.setSearchAlbum(res.data.albums.items));
                res.data.playlists && dispatch(action.playlist.setSearchPlaylist(res.data.playlists.items));

                navigate('/search');
                
                setSearchText('')

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