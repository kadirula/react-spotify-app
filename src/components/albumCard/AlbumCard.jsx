import './albumCard.scss';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DefaultImage from '../../assets/music.jpg'

import { albums as albumsLocalData } from '../../api/data/albums';

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
                loop
            >
                {
                    albums != null ?
                        albums?.items.map((album, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/album/${album.id}`} className="album-card">
                                    <div className="album-card__image">
                                        <img src={album.images.length > 0 ? album.images[0].url : DefaultImage} alt="" />
                                    </div>
                                    <div className="album-card__info">
                                        <div className="album-card__text">
                                            {album.name.length > 20 ? album.name.substr(0, 20) + '...' : album.name}
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )) :
                        albumsLocalData?.map((album, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/album/${album.id}`} className="album-card">
                                    <div className="album-card__image">
                                        <img src={album.image ? album.image : DefaultImage} alt="" />
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
        <div className='d-flex flex-wrap align-items-center gap-3'>
            {
                albums != null ?
                    albums?.items.map((album, index) => (
                        <Link to={`/album/${album.id}`} className="album-card" key={index}>
                            <div className="album-card__image">
                                <img src={album.images.length > 0 ? album.images[0].url : DefaultImage} alt="" />
                            </div>
                            <div className="album-card__info">
                                <div className="album-card__text">
                                    {album.name.length > 20 ? album.name.substr(0, 20) + '...' : album.name}
                                </div>
                            </div>
                        </Link>
                    ))
                    :
                    albumsLocalData?.map((album, index) => (
                        <Link to={`/album/${album.id}`} className="album-card" key={index}>
                            <div className="album-card__image">
                                <img src={album.image ? album.image : DefaultImage} alt="" />
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