import './home.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setArtistList, setArtistAlbums } from '../../redux/reducers/artistReducer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromURL } from '../../api/spotify';
import { useState } from 'react';
import { ArtistAlbums } from '../../components';
import SyncLoader from "react-spinners/SyncLoader";

const Home = () => {
  const artistIds = '1UV3ii5FWWXF3jkZVeA2bb,0rHmlPHC63IGBTrtQEdDw6,4q3ewBCX7sLwd24euuV69X,64M6ah0SkkRsnPGtGiRAbb'

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { artistList } = useSelector(state => state.artist)

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 4000);

    fetchFromURL(`artists?ids=${artistIds}`).then(response => {
      if (response.status) {
        dispatch(setArtistList(response.data.artists))
      }
      else {
        if (response.statusCode === 401) {
          localStorage.removeItem('access-token')
          navigate('/login')
        }
      }
    })

    artistList?.length > 0 && artistList?.forEach(artist => {
      fetchFromURL(`artists/${artist.id}/albums`).then(response => {
        if (response.status) {
          setAlbums(oldArray => [...oldArray, {
            name: artist.name,
            albums: response.data
          }]);
        }
        else {
          if (response.statusCode === 401) {
            localStorage.removeItem('access-token')
            navigate('/login')
          }
        }
      });
    })

    if (albums.length > 0) {
      dispatch(setArtistAlbums(albums))
    }

  }, [])


  if (loading) {
    return (
      <>
        <SyncLoader
          color='#fff'
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </>
    )
  }
  return (
    <>
      <ArtistAlbums />
    </>
  )
}

export default Home