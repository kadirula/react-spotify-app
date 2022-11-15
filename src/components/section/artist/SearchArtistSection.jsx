import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

/* Components  */
import { SwiperSlider, ArtistCard } from '../../index';

/* Swiper  */
import { SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';

const SearchArtistSection = () => {

    const navigate = useNavigate();

    const { searchArtists } = useSelector(state => state.artist);

    useEffect(() => {
        if (searchArtists == null) {
            navigate('/')
        }
    }, [])

    return (
        <SwiperSlider>
            {
                searchArtists?.map((artist, index) => (
                    <SwiperSlide key={index}>
                        <ArtistCard
                            id={artist?.id}
                            image={artist?.images[0]?.url}
                            name={artist?.name}
                            followers={artist?.followers.total}
                        />
                    </SwiperSlide>
                ))
            }

        </SwiperSlider>
    )


}

export default SearchArtistSection