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
        // artistAll dizisinin id key indeki değerleri yakalayıp aralarına virgül ekleyerek birleştiriyoruz. 1,2,3,4,5,6,7 gibi
        const artistAllIds = artistAll.reduce((a,b) => (a.id || a) + ',' + b.id)

        if (homeArtists == null) {
            fetchFromURL(`artists?ids=${artistAllIds}`).then(res => {
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