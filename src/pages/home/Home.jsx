import './home.scss'
import { useEffect, useState } from 'react';
import { HomeArtistSection, HomeAlbumSection, Loading, Search } from '../../components';


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);

  }, [])

  return (
    <>
      {
        loading ?
          <div className='d-flex justify-content-center py-5'>
            <Loading loading={loading} />
          </div>
          :
          <>
            <div className="section section--search">
              <Search />
            </div>

            <div className="section">
              <h2 className="section__title">
                Sanatçılar
              </h2>
              <HomeArtistSection />
            </div>


            <div className="section">
              <h2 className="section__title">
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