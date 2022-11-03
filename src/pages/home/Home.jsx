import './home.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setArtistList, setArtistAlbums } from '../../redux/reducers/artistReducer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromURL } from '../../api/spotify';
import { useState } from 'react';
import { ArtistAlbums } from '../../components/';

const Home = () => {
  const artistIds = '1UV3ii5FWWXF3jkZVeA2bb,0rHmlPHC63IGBTrtQEdDw6,4q3ewBCX7sLwd24euuV69X,64M6ah0SkkRsnPGtGiRAbb'

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { artistList } = useSelector(state => state.artist)

  const [isArtist, setIsArtist] = useState(false);

  useEffect(() => {
    fetchFromURL(`artists?ids=${artistIds}`).then(response => {
      if (response.status) {
        dispatch(setArtistList(response.data.artists))
        setIsArtist(true)
      }
      else {
        if (response.statusCode === 401) {
          localStorage.removeItem('access-token')
          navigate('/login')
        }
      }
    })
  }, [])

  useEffect(() => {
    artistList?.length > 0 && artistList.forEach(artist => {
      fetchFromURL(`artists/${artist.id}/albums`).then(response => {
        if (response.status) {
          dispatch(setArtistAlbums({
            name: artist.name,
            albums: response.data
          }))
        }
        else {
          if (response.statusCode === 401) {
            localStorage.removeItem('access-token')
            navigate('/login')
          }
        }
      });
    })
  }, [isArtist])

  return (
    <>
      <ArtistAlbums />    
    </>
  )
}

export default Home