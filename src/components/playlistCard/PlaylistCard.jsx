import './playlistCard.scss';
import DefaultImage from '../../assets/music.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { playlists as playlistsLocalData } from '../../api/data/playlists';

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const PlaylistCard = ({ slider = false }) => {

    const { playlists } = useSelector(state => state.spotify);

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
                    playlists != null ?
                        playlists?.items.map((playlist, index) => (
                            <SwiperSlide key={index}>
                                <div className='playlist-card'>
                                    <div className="playlist-card__image">
                                        <img src={playlist.images.length > 0 ? playlist.images[0].url : DefaultImage} alt="" />
                                    </div>
                                    <div className="playlist-card__info">
                                        <Link to={`/playlist/${playlist.id}`} className="playlist-card__text">
                                            {playlist.name.length > 20 ? playlist.name.substr(0, 20) + '...' : playlist.name}
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        :
                        playlistsLocalData?.map((playlist, index) => (
                            <SwiperSlide key={index}>
                                <div className='playlist-card'>
                                    <div className="playlist-card__image">
                                        <img src={playlist.image ? playlist.image : DefaultImage} alt="" />
                                    </div>
                                    <div className="playlist-card__info">
                                        <Link to={`/playlist/${playlist.id}`} className="playlist-card__text">
                                            {playlist.name.length > 20 ? playlist.name.substr(0, 20) + '...' : playlist.name}
                                        </Link>
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
                playlists != null ?
                    playlists?.items.map((playlist, index) => (
                        <div className='playlist-card' key={index}>
                            <div className="playlist-card__image">
                                <img src={playlist.images.length > 0 ? playlist.images[0].url : DefaultImage} alt="" />
                            </div>
                            <div className="playlist-card__info">
                                <Link to={`/playlist/${playlist.id}`} className="playlist-card__text">
                                    {playlist.name.length > 20 ? playlist.name.substr(0, 20) + '...' : playlist.name}
                                </Link>
                            </div>
                        </div>
                    ))
                    :
                    playlistsLocalData?.map((playlist, index) => (
                        <div className='playlist-card' key={index}>
                            <div className="playlist-card__image">
                                <img src={playlist.image ? playlist.image : DefaultImage} alt="" />
                            </div>
                            <div className="playlist-card__info">
                                <Link to={`/playlist/${playlist.id}`} className="playlist-card__text">
                                    {playlist.name.length > 20 ? playlist.name.substr(0, 20) + '...' : playlist.name}
                                </Link>
                            </div>
                        </div>
                    ))

            }
        </div>
    )
}

export default PlaylistCard