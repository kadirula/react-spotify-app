import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistAll } from '../../../api/data/artists';
import { fetchFromURL } from '../../../api/spotify';
import { action } from '../../../redux/actions';

/* Components  */
import { SwiperSlider, ArtistCard } from '../../index';

/* Swiper  */
import { SwiperSlide } from 'swiper/react';

const HomeArtistSection = () => {

    const dispatch = useDispatch();

    const { homeArtists } = useSelector(state => state.artist);

    useEffect(() => {
        if (homeArtists == null) {
            fetchFromURL(`artists?ids=${artistAll.join(',')}`).then(res => {
                if (res.status) {
                    dispatch(action.artist.setHomeArtist(res.data.artists))
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
                homeArtists?.map((artist, index) => (
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

export default HomeArtistSection