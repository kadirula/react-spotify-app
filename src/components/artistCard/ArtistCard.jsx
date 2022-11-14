import './artistCard.scss'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { BiLinkAlt } from '../../utils/icon';
import artistImage from '../../assets/artist.png';
import { useDispatch, useSelector } from 'react-redux';
import { artistAll } from '../../api/data/artists';

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { fetchFromURL } from '../../api/spotify';
import { setArtist } from '../../redux/reducers/spotifyReducer';


const ArtistCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { artists } = useSelector(state => state.spotify);

    useEffect(() => {

        if (artists == null) {

            fetchFromURL(`artists?ids=${artistAll.join(',')}`).then(res => {
                if (res.status) {
                    dispatch(setArtist(res.data.artists))
                }
                else {
                    if (res.statusCode === 401) {
                        localStorage.removeItem('access-token')
                        navigate('/login')
                    }
                }
            })
        }

    }, [])

    return (
        <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            navigation
            loop
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 5
                }
            }}
        >
            {
                artists?.map((artist, index) => (
                    <SwiperSlide key={index}>
                        <div className="artist-card">
                            <Link to={`/artist/${artist?.id}`} className='artist-card__hover'>
                                <BiLinkAlt />
                            </Link>
                            <div className="artist-card__image">
                                <img src={artist?.images ? artist?.images[0]?.url : artistImage} alt={artist?.name} />
                            </div>
                            <div className="artist-card__info">
                                <div className="artist-card__text">{artist?.name}</div>
                                <div className='artist-card__label'>Takipçi : {artist?.followers.total.toLocaleString()}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )

}

export default ArtistCard