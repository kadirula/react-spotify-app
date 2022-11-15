import './artist.scss'
import { ArtistCard, HomeArtistCard, Loading } from '../../components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchFromURL } from '../../api/spotify';
import { localArtists, foreignArtists } from '../../api/data/artists';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux/actions';
import { useState } from 'react';

const Artist = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { type } = useParams();

  const { artists } = useSelector(state => state.artist)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    if (type === 'local') {
      fetchFromURL(`artists?ids=${localArtists.join(',')}`).then(res => {
        if (res.status) {
          dispatch(action.artist.setArtist(res.data.artists))
        }
      })
    }
    else if (type === 'foreign') {
      fetchFromURL(`artists?ids=${foreignArtists.join(',')}`).then(res => {
        if (res.status) {
          dispatch(action.artist.setArtist(res.data.artists))
        }
      })
    }
  }, [type])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      <h2 className='page-title'>
        {type === 'local' ? 'YERLİ' : 'YABANCI'} Sanatçılar
      </h2>
      {
        loading ?
          <div className='d-flex justify-content-center'>
            <Loading loading={loading} />
          </div>
          :
          <div className='d-flex flex-wrap gap-3 justify-content-center justify-content-md-start'>
            {
              artists?.map((artist, index) => (
                <>
                  <ArtistCard
                    id={artist?.id}
                    image={artist?.images[0]?.url}
                    name={artist?.name}
                    followers={artist?.followers.total}
                  />
                </>
              ))
            }
          </div>
      }
    </div>
  )
}

export default Artist