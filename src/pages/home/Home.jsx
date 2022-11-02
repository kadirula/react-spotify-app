import './home.scss'
import { BiLinkAlt } from '../../utils/icon';
import { Link } from 'react-router-dom';
import MusicImage from '../../assets/music.jpg';
import { useEffect } from 'react';
import { setArtistList, setArtistAlbums } from '../../redux/reducers/artistReducer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromURL } from '../../api/spotify';
import { useState } from 'react';


/*
burada yapmaya çalıştığımız static olarak sanatçıların id lerini tutuyoruz.
Daha sonra sanatçıları api den çekip redux ile artistList içerisinde gelen verileri tutuyoruz.
Api den çektiğimiz sanatçıların albümlerini yine api den çekip redux ile artistAlbums içerisine almaya çalışacağız 

*/

const Home = () => {
  const artistIds = '1UV3ii5FWWXF3jkZVeA2bb,0rHmlPHC63IGBTrtQEdDw6'

  const dispatch = useDispatch();



  const { artistList, artistAlbums } = useSelector(state => state.artist)

  const [artistLoading, setArtistLoading] = useState(false);

  useEffect(() => {
    fetchFromURL(`artists?ids=${artistIds}`).then(response => {
      if (response.status) {
        dispatch(setArtistList(response.data.artists))
        setArtistLoading(true)
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
      });
    })
  }, [artistLoading])

  console.log(artistAlbums);

  return (
    <>
      {artistAlbums?.length > 0 && artistAlbums?.map((artist, index) => (
        <div className="home-section" key={index}>
          <h4 className="home-section__title">
            {artist.name} Albümleri
          </h4>
          <div className='c-card'>
            {
              artist.albums.items.length > 0 &&
              artist.albums.items.map((album, index) => (
                <>
                  {
                    index < 10 &&
                    <div className="c-card__item" key={index}>
                      <Link to={album.href} className='c-card__hover'>
                        <BiLinkAlt />
                      </Link>
                      <div className="c-card__image">
                        <img src={album.images[0].url} alt="" />
                      </div>
                      <div className="c-card__info">
                        <div className="c-card__text">${album.name}</div>
                        <div className="c-card__label">2006 - Albüm</div>
                      </div>
                    </div>
                  }

                </>
              ))
            }

          </div>
        </div>
      ))}


      <div className="home-section">
        <h4 className="home-section__title">En Çok Dinlenen Sanatçılar</h4>
        <div className='c-card'>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <h4 className="home-section__title">En Beğenilen Çalma Listeleri</h4>
        <div className='c-card'>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to='/' className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={MusicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Akşam Üstü</div>
              <div className="c-card__label">2006 - Albüm</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home