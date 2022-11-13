import './artistCard.scss'
import { Link } from 'react-router-dom'
import { BiLinkAlt } from '../../utils/icon';
import artistImage from '../../assets/artist.png';
import { useSelector } from 'react-redux';

import { artists as artistLocalData } from '../../api/data/artists';

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
                loop
            >
                {
                    artists != null ?
                        artists?.items.map((artist, index) => (
                            <SwiperSlide key={index}>
                                <div className="artist-card">
                                    <Link to={`/artist/${artist.id}`} className='artist-card__hover'>
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
                        :
                        artistLocalData?.map((artist, index) => (
                            <SwiperSlide key={index}>
                                <div className="artist-card">
                                    <Link to={`/artist/${artist.id}`} className='artist-card__hover'>
                                        <BiLinkAlt />
                                    </Link>
                                    <div className="artist-card__image">
                                        <img src={artist.image ? artist.image : artistImage} alt="" />
                                    </div>
                                    <div className="artist-card__info">
                                        <div className="artist-card__text">{artist.name}</div>
                                        {/* <div className='artist-card__label'>Takipçi : {artist.followers.total.toLocaleString()}</div> */}
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))
                }
            </Swiper>
        )
    }

    return (
        <div className='d-flex flex-wrap align-items-center gap-3'>
            {
                artists != null ?
                    artists?.items.map((artist, index) => (
                        <div className="artist-card" key={index}>
                            <Link to={`/artist/${artist.id}`} className='artist-card__hover'>
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
                    :
                    artistLocalData?.map((artist, index) => (
                        <div className="artist-card" key={index}>
                            <Link to={`/artist/${artist.id}`} className='artist-card__hover'>
                                <BiLinkAlt />
                            </Link>
                            <div className="artist-card__image">
                                <img src={artist.image ? artist.image : artistImage} alt="" />
                            </div>
                            <div className="artist-card__info">
                                <div className="artist-card__text">{artist.name}</div>
                                {/* <div className='artist-card__label'>Takipçi : {artist.followers.total.toLocaleString()}</div> */}
                            </div>
                        </div>
                    ))


            }
        </div>
    )
}

export default ArtistCard