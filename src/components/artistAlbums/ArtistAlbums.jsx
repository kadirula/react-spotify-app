import './artistAlbum.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiLinkAlt } from '../../utils/icon';

const ArtistAlbums = () => {

    const { artistAlbums } = useSelector(state => state.artist);

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
                                            <Link to={`/album/${album.id}`} className='c-card__hover'>
                                                <BiLinkAlt />
                                            </Link>
                                            <div className="c-card__image">
                                                <img src={album.images[0].url} alt="" />
                                            </div>
                                            <div className="c-card__info">
                                                <div className="c-card__text">{album.name}</div>
                                            </div>
                                        </div>
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>
            ))}
        </>

    )
}

export default ArtistAlbums