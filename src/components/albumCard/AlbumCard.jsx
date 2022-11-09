import './albumCard.scss';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import artistImage from '../../assets/artist.png';

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const AlbumCard = ({ slider = false }) => {

    const { albums } = useSelector(state => state.spotify);

    if (slider) {
        return (
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >
                {
                    albums?.items.map((album, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/album/${album.id}`} className="album-card" key={index}>
                                <div className="album-card__image">
                                    <img src={album.images.length > 0 ? album.images[0].url : artistImage} alt="" />
                                </div>
                                <div className="album-card__info">
                                    <div className="album-card__text">
                                        {album.name.length > 20 ? album.name.substr(0, 20) + '...' : album.name}
                                    </div>
                                </div>
                            </Link>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }

    return (
        <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
            {
                albums?.items.map((album, index) => (
                    <Link to={`/album/${album.id}`} className="album-card" key={index}>
                        <div className="album-card__image">
                            <img src={album.images.length > 0 ? album.images[0].url : artistImage} alt="" />
                        </div>
                        <div className="album-card__info">
                            <div className="album-card__text">
                                {album.name.length > 20 ? album.name.substr(0, 20) + '...' : album.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default AlbumCard