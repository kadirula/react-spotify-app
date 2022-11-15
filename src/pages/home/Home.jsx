import './home.scss'
import { useEffect } from 'react';
import { HomeArtistSection, HomeAlbumSection, Loading, Search } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux/actions';



const Home = () => {

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.site);

  useEffect(() => {
    setTimeout(() => {
      dispatch(action.site.setLoading(false))
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
              <HomeArtistSection />
            </div>


            <div className="home-section">
              <h2 className="home-section__title">
                Albümler
              </h2>
              <HomeAlbumSection />
            </div>
          </>
      }
    </>
  )
}

export default Home