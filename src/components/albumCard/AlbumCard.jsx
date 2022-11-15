import './albumCard.scss';
import DefaultImage from '../../assets/music.jpg'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { albumsAll } from '../../api/data/albums';
import { fetchFromURL } from '../../api/spotify';
import { setAlbum } from '../../redux/reducers/spotifyReducer';

/* Swiper  */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const AlbumCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { albums } = useSelector(state => state.spotify);

    useEffect(() => {

        if (albums == null) {

            fetchFromURL(`albums?ids=${albumsAll.join(',')}`).then(res => {
                if (res.status) {
                    dispatch(setAlbum(res.data.albums))
                }
                else {
                    // if (res.statusCode === 401) {
                    //     localStorage.removeItem('access-token')
                    //     navigate('/login')
                    // }
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
                albums?.map((album, index) => (
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
                ))
            }
        </Swiper>
    )
}

export default AlbumCard