import './home.scss'
import { useEffect } from 'react';
import { ArtistCard, AlbumCard, PlaylistCard, Loading, Search, SearchArtistCard } from '../../components';
import { setLoading } from '../../redux/reducers/siteReducer';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setArtist } from '../../redux/reducers/spotifyReducer';



const Home = () => {

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.site);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 2000);

  }, [loading])

  return (
    <>
      {
        loading ?
          <div className='d-flex justify-content-center py-5'>
            <Loading loading={loading} />
          </div>
          :
          <>
            <div className="home-section home-section--search">
              <Search />
            </div>

            <div className="home-section">
              <h2 className="home-section__title">
                Sanatçılar
              </h2>
              <ArtistCard slider={true} />
            </div>


            <div className="home-section">
              <h2 className="home-section__title">
                Albümler
              </h2>
              <AlbumCard />
            </div>

            <div className="home-section">
              <h2 className="home-section__title">
                Oynatma Listeleri
              </h2>
              <PlaylistCard />
            </div>
          </>
      }


    </>
  )
}

export default Home