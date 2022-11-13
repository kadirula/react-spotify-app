import './albumDetail.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchFromURL } from '../../api/spotify';
import { setAlbumData } from '../../redux/reducers/albumReducer';

import SpotifyPlayer from 'react-spotify-player';
import { Loading } from '../../components';

const AlbumDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { albumData } = useSelector(state => state.album);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);

        fetchFromURL(`albums/${id}`).then(res => {
            if (res.status) {
                console.log(res);
                dispatch(setAlbumData(res.data))
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
        <div className='album-detail'>
            <div className="album-detail__banner">
                <div className="album-detail__image">
                    <img src={albumData?.images[0].url} alt="" />
                </div>
                <div className="album-detail__info">
                    <div className="album-detail__label">
                        {albumData?.type}
                    </div>
                    <a href={albumData?.external_urls.spotify} className="album-detail__title">
                        {albumData?.name}
                    </a>
                    <div className="album-detail__sub">
                        <Link to={`/artist/${albumData?.artists[0].id}`} className="album-detail__author">
                            {albumData?.artists[0].name}
                        </Link>
                        <span>
                            - {
                                new Date(albumData?.release_date).toLocaleDateString('tr-TR')
                            }
                        </span>
                    </div>
                    {
                        albumData?.genres.length > 0 &&
                        <ul className='album-detail__tag'>
                            {
                                albumData?.genres.map((item, index) => (
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
                            uri={albumData?.uri}
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