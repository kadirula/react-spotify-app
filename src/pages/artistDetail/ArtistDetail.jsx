import './artistDetail.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFromURL } from '../../api/spotify';
import { action } from '../../redux/actions';

import SpotifyPlayer from 'react-spotify-player';
import { Loading } from '../../components';

const ArtistDetail = () => {

    const { id } = useParams();

    const { artistDetail } = useSelector(state => state.artist);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);

        fetchFromURL(`artists/${id}`).then(res => {
            if (res.status) {
                dispatch(action.artist.setArtistDetail(res.data))
            }
            else {
                dispatch(action.site.setError(res.err))
                navigate('/error');
            }
        })
    }, [id])



    return (
        <div className='artist-detail'>
            <div className="artist-detail__banner">
                <div
                    className="artist-detail__image"
                    style={{
                        backgroundImage: `url(${artistDetail?.images[0].url})`
                    }}
                >
                </div>

                <div className="artist-detail__info">
                    <a
                        href={artistDetail?.external_urls.spotify}
                        target='_blank'
                        className="artist-detail__title">
                        {artistDetail?.name}
                    </a>
                    <div className="artist-detail__subtext">
                        Takipçi: {artistDetail?.followers.total.toLocaleString()}
                    </div>
                    {
                        artistDetail?.genres.length > 0 &&
                        <ul className='artist-detail__tag'>
                            {
                                artistDetail?.genres.map((item, index) => (
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
                            uri={artistDetail?.uri}
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