import './artistCard.scss';
import { BiLinkAlt } from '../../utils/icon';
import { Link } from 'react-router-dom';
import ArtistImage from '../../assets/artist.png';

const ArtistCard = ({ id, image, name, followers }) => {
    return (
        <div className="artist-card mx-0">
            <Link to={`/artist/${id}`} className='artist-card__hover'>
                <BiLinkAlt />
            </Link>
            <div className="artist-card__image">
                <img src={image ? image : ArtistImage} alt={name} />
            </div>
            <div className="artist-card__info">
                <div className="artist-card__text">{name}</div>
                <div className='artist-card__label'>Takipçi : {followers.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default ArtistCard