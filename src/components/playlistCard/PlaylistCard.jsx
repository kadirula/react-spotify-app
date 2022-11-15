import './playlistCard.scss';
import DefaultImage from '../../assets/music.jpg'
import { Link } from 'react-router-dom'

const PlaylistCard = ({ id, image, name }) => {

    return (
        <div className='playlist-card'>
            <div className="playlist-card__image">
                <img src={image ? image : DefaultImage} alt={name} />
            </div>
            <div className="playlist-card__info">
                <Link to={`/playlist/${id}`} className="playlist-card__text">
                    {name.length > 20 ? name.substr(0, 20) + '...' : name}
                </Link>
            </div>
        </div>
    )

}

export default PlaylistCard