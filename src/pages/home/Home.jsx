import './home.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import { Search, ArtistCard, AlbumCard } from '../../components';
import SyncLoader from "react-spinners/SyncLoader";
import musicImage from '../../assets/music.jpg';
import { Link } from 'react-router-dom';
import { BiLinkAlt } from '../../utils/icon';
import { useSelector } from 'react-redux';

const Home = () => {


  const { artists, albums, playlists, tracks } = useSelector(state => state.spotify);

  const [loading, setLoading] = useState(false);

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
      {/* <ArtistAlbums /> */}
      <Search />

      {
        artists &&
        <div className="home-section">
          <Link to='/artist' className="home-section__title">
            Sanatçı
          </Link>
          <ArtistCard slider={true} />
        </div>
      }

      {
        albums &&
        <div className="home-section">
          <Link to='/album' className="home-section__title">
          Albüm
          </Link>
          <AlbumCard slider={true} />
        </div>
      }


      <div className="home-section">
        <h4 className="home-section__title">
          Oynatma Listesi
        </h4>
        <div className='c-card'>
          <div className="c-card__item">
            <Link to={`/album`} className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={musicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Sanatçı Adı</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to={`/album`} className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={musicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Sanatçı Adı</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to={`/album`} className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={musicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Sanatçı Adı</div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <h4 className="home-section__title">
          Tracks
        </h4>
        <div className='c-card'>
          <div className="c-card__item">
            <Link to={`/album`} className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={musicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Sanatçı Adı</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to={`/album`} className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={musicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Sanatçı Adı</div>
            </div>
          </div>
          <div className="c-card__item">
            <Link to={`/album`} className='c-card__hover'>
              <BiLinkAlt />
            </Link>
            <div className="c-card__image">
              <img src={musicImage} alt="" />
            </div>
            <div className="c-card__info">
              <div className="c-card__text">Sanatçı Adı</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home