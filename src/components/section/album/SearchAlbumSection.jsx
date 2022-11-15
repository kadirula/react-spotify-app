import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

/* Components  */
import { SwiperSlider, AlbumCard } from '../../index';

/* Swiper  */
import { SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';

const SearchAlbumSection = () => {

    const navigate = useNavigate();

    const { searchAlbums } = useSelector(state => state.album);

    useEffect(() => {
        if (searchAlbums == null) {
            navigate('/')
        }
    }, [])

    return (
        <SwiperSlider>
            {
                searchAlbums?.map((album, index) => (
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

export default SearchAlbumSection