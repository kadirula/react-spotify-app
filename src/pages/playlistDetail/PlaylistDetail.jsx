import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchFromURL } from '../../api/spotify';
import { setPlaylistDetail } from '../../redux/reducers/playlistReducer';

import SpotifyPlayer from 'react-spotify-player';
import { Loading } from '../../components';

import './playlistDetail.scss'

const PlaylistDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { playlistDetail } = useSelector(state => state.playlist);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);

        fetchFromURL(`playlists/${id}`).then(res => {
            if (res.status) {
                dispatch(setPlaylistDetail(res.data))
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
                    <img src={playlistDetail?.images[0].url} alt="" />
                </div>
                <div className="playlist-detail__info">
                    <div className="playlist-detail__label">
                        ÇALMA LİSTESİ
                    </div>
                    <a href={playlistDetail?.external_urls.spotify} target='_blank' className="playlist-detail__title">
                        {playlistDetail?.name}
                    </a>
                    <div className="playlist-detail__sub">
                        <Link to={`/user/${playlistDetail?.owner.id}`} className="playlist-detail__author">
                            Yazar: {playlistDetail?.owner.display_name}
                        </Link>
                        <span>
                            - Takipçi: {
                                playlistDetail?.followers.total.toLocaleString()
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
                            uri={playlistDetail?.uri}
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