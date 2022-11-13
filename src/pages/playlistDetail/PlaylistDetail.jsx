import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchFromURL } from '../../api/spotify';
import { setPlaylistData } from '../../redux/reducers/playlistReducer';

import SpotifyPlayer from 'react-spotify-player';
import { Loading } from '../../components';

import './playlistDetail.scss'

const PlaylistDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { playlistData } = useSelector(state => state.playlist);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);

        fetchFromURL(`playlists/${id}`).then(res => {
            if (res.status) {
                console.log(res);
                dispatch(setPlaylistData(res.data))
            }
            else {
                if (res.statusCode === 401) {
                    localStorage.removeItem('access-token')
                    navigate('/login')
                }
            }
        })
    }, [id])

    return (
        <div className='playlist-detail'>
            <div className="playlist-detail__banner">
                <div className="playlist-detail__image">
                    <img src={playlistData?.images[0].url} alt="" />
                </div>
                <div className="playlist-detail__info">
                    <div className="playlist-detail__label">
                        ÇALMA LİSTESİ
                    </div>
                    <a href={playlistData?.external_urls.spotify} className="playlist-detail__title">
                        {playlistData?.name}
                    </a>
                    <div className="playlist-detail__sub">
                        <Link to={`/user/${playlistData?.owner.id}`} className="playlist-detail__author">
                            Yazar: {playlistData?.owner.display_name}
                        </Link>
                        <span>
                            - Takipçi: {
                                playlistData?.followers.total.toLocaleString()
                            }
                        </span>
                    </div>
                </div>
            </div>

            <div className="playlist-detail__player">
                {
                    loading ?
                        <div className='d-flex justify-content-center py-5'>
                            <Loading loading={loading} />
                        </div>
                        :
                        <SpotifyPlayer
                            uri={playlistData?.uri}
                            size={{
                                width: '100%',
                                height: '500'
                            }}
                            view='list'
                            theme='black'
                        />
                }

            </div>
        </div>
    )
}

export default PlaylistDetail