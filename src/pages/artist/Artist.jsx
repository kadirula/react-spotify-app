import './artist.scss'
import { ArtistCard } from '../../components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchFromURL } from '../../api/spotify';
import { localArtists, foreignArtists } from '../../api/data/artists';
import { useDispatch } from 'react-redux';
import { setArtist } from '../../redux/reducers/spotifyReducer';

const Artist = () => {

  const dispatch = useDispatch();

  const { type } = useParams();

  useEffect(() => {
    if (type === 'local') {
      fetchFromURL(`artists?ids=${localArtists.join(',')}`).then(res => {
        if (res.status) {
          dispatch(setArtist(res.data.artists))
        }
      })
    }
    else if (type === 'foreign') {
      fetchFromURL(`artists?ids=${foreignArtists.join(',')}`).then(res => {
        if (res.status) {
          dispatch(setArtist(res.data.artists))
        }
      })
    }
  }, [])


  return (
    <div>
      <h2 className='page-title'>
        Tüm Sanatçılar
      </h2>
      <ArtistCard />
    </div>
  )
}

export default Artist