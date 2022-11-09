import './artistCard.scss'
import { Link } from 'react-router-dom'
import { BiLinkAlt } from '../../utils/icon';
import artistImage from '../../assets/artist.png';
import { useSelector } from 'react-redux';

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ArtistCard = ({ slider = false }) => {

    const { artists } = useSelector(state => state.spotify);

    if (slider) {
        return (
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >
                {
                    artists?.items.map((artist, index) => (
                        <SwiperSlide key={index}>
                            <div className="artist-card">
                                <Link to={`/album/${artist.id}`} className='artist-card__hover'>
                                    <BiLinkAlt />
                                </Link>
                                <div className="artist-card__image">
                                    <img src={artist.images.length > 0 ? artist.images[0].url : artistImage} alt="" />
                                </div>
                                <div className="artist-card__info">
                                    <div className="artist-card__text">{artist.name}</div>
                                    <div className='artist-card__label'>Takipçi : {artist.followers.total.toLocaleString()}</div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }

    return (
        <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
            {
                artists?.items.map((artist, index) => (
                    <div className="artist-card" key={index}>
                        <Link to={`/album/${artist.id}`} className='artist-card__hover'>
                            <BiLinkAlt />
                        </Link>
                        <div className="artist-card__image">
                            <img src={artist.images.length > 0 ? artist.images[0].url : artistImage} alt="" />
                        </div>
                        <div className="artist-card__info">
                            <div className="artist-card__text">{artist.name}</div>
                            <div className='artist-card__label'>Takipçi : {artist.followers.total}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ArtistCard