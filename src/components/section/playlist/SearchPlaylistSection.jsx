import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

/* Components  */
import { SwiperSlider, PlaylistCard } from '../../index';

/* Swiper  */
import { SwiperSlide } from 'swiper/react';

const SearchPlaylistSection = () => {

    const navigate = useNavigate();

    const { searchPlaylists } = useSelector(state => state.playlist);

    useEffect(() => {
        if (searchPlaylists == null) {
            navigate('/')
        }
    }, [])

    return (
        <SwiperSlider>
            {
                searchPlaylists?.map((playlist, index) => (
                    <SwiperSlide key={index}>
                        <PlaylistCard
                            id={playlist?.id}
                            image={playlist.images[0].url}
                            name={playlist?.name}
                        />
                    </SwiperSlide>
                ))
            }

        </SwiperSlider>
    )


}

export default SearchPlaylistSection