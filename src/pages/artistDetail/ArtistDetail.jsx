import './artistDetail.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFromURL } from '../../api/spotify';
import { setArtistData } from '../../redux/reducers/artistReducer';

import SpotifyPlayer from 'react-spotify-player';
import { Loading } from '../../components';

const ArtistDetail = () => {

    const { id } = useParams();

    const { artistData } = useSelector(state => state.artist);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);

        fetchFromURL(`artists/${id}`).then(res => {
            if (res.status) {
                dispatch(setArtistData(res.data))
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
        <div className='artist-detail'>
            <div className="artist-detail__banner">
                <div
                    className="artist-detail__image"
                    style={{
                        backgroundImage: `url(${artistData?.images[0].url})`
                    }}
                >
                </div>

                <div className="artist-detail__info">
                    <a
                        href={artistData?.external_urls.spotify}
                        target='_blank'
                        className="artist-detail__title">
                        {artistData?.name}
                    </a>
                    <div className="artist-detail__subtext">
                        Takipçi: {artistData?.followers.total.toLocaleString()}
                    </div>
                    {
                        artistData?.genres.length > 0 &&
                        <ul className='artist-detail__tag'>
                            {
                                artistData?.genres.map((item, index) => (
                                    <li key={index}>#{item}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
            <div className="artist-detail__player">
                {
                    loading ?
                        <div className='d-flex justify-content-center py-5'>
                            <Loading loading={loading} />
                        </div>
                        :
                        <SpotifyPlayer
                            uri={artistData?.uri}
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

export default ArtistDetail