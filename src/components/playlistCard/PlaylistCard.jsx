import './playlistCard.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import DefaultImage from '../../assets/music.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromURL } from '../../api/spotify';
import { setPlaylist } from '../../redux/reducers/spotifyReducer';

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const PlaylistCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { playlists } = useSelector(state => state.spotify);

    useEffect(() => {
        const getAllPlaylists = async () => {
            if (playlists == null) {
                fetchFromURL('me/playlists').then(res => {
                    if(res.status){
                        dispatch(setPlaylist(res.data.items))
                    }
                })


            }
        }

        getAllPlaylists();

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
                playlists?.map((playlist, index) => (
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
            }
        </Swiper>
    )

}

export default PlaylistCard