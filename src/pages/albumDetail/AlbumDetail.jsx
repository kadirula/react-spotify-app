import './albumDetail.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchFromURL } from '../../api/spotify';
import { action } from '../../redux/actions';

import SpotifyPlayer from 'react-spotify-player';
import { Loading } from '../../components';

const AlbumDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { albumDetail } = useSelector(state => state.album);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);

        fetchFromURL(`albums/${id}`).then(res => {
            if (res.status) {
                dispatch(action.album.setAlbumDetail(res.data))
            }
            else {
                dispatch(action.site.setError(res.err))
                navigate('/error');
            }
        })
    }, [id])

    return (
        <div className='album-detail'>
            <div className="album-detail__banner">
                <div className="album-detail__image">
                    <img src={albumDetail?.images[0].url} alt="" />
                </div>
                <div className="album-detail__info">
                    <div className="album-detail__label">
                        {albumDetail?.type}
                    </div>
                    <a href={albumDetail?.external_urls.spotify} className="album-detail__title">
                        {albumDetail?.name}
                    </a>
                    <div className="album-detail__sub">
                        <Link to={`/artist/${albumDetail?.artists[0].id}`} className="album-detail__author">
                            {albumDetail?.artists[0].name}
                        </Link>
                        <span>
                            - {
                                new Date(albumDetail?.release_date).toLocaleDateString('tr-TR')
                            }
                        </span>
                    </div>
                    {
                        albumDetail?.genres.length > 0 &&
                        <ul className='album-detail__tag'>
                            {
                                albumDetail?.genres.map((item, index) => (
                                    <li key={index}>#{item}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>

            <div className="album-detail__player">
                {
                    loading ?
                        <div className='d-flex justify-content-center py-5'>
                            <Loading loading={loading} />
                        </div>
                        :
                        <SpotifyPlayer
                            uri={albumDetail?.uri}
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

export default AlbumDetail