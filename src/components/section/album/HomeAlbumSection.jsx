import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { albumsAll } from '../../../api/data/albums';
import { fetchFromURL } from '../../../api/spotify';
import { action } from '../../../redux/actions';

/* Components  */
import { SwiperSlider, AlbumCard } from '../../index';

/* Swiper  */
import { SwiperSlide } from 'swiper/react';

const HomeAlbumSection = () => {

    const dispatch = useDispatch();

    const { homeAlbums } = useSelector(state => state.album);

    useEffect(() => {
        if (homeAlbums == null) {
            fetchFromURL(`albums?ids=${albumsAll.join(',')}`).then(res => {
                if (res.status) {
                    dispatch(action.album.setHomeAlbum(res.data.albums))
                }
                else {
                    // TO DO hata mesajı gösterilecek
                }
            })
        }
    }, [])

    return (
        <SwiperSlider>
            {
                homeAlbums?.map((album, index) => (
                    <SwiperSlide key={index}>
                        <AlbumCard
                            id={album?.id}
                            image={album.images[0].url}
                            name={album?.name}
                        />
                    </SwiperSlide>
                ))
            }
        </SwiperSlider>
    )
}

export default HomeAlbumSection