import './albumCard.scss';
import DefaultImage from '../../assets/music.jpg'
import { Link } from 'react-router-dom'

const AlbumCard = ({ id, image, name }) => {

    return (
        <Link to={`/album/${id}`} className="album-card">
            <div className="album-card__image">
                <img src={image ? image : DefaultImage} alt="" />
            </div>
            <div className="album-card__info">
                <div className="album-card__text">
                    {name.length > 20 ? name.substr(0, 20) + '...' : name}
                </div>
            </div>
        </Link>

    )
}

export default AlbumCard