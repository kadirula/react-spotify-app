import './albumDetail.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchFromURL } from '../../api/spotify';
import { setAlbumDetail } from '../../redux/reducers/albumReducer';
import SpotifyPlayer from 'react-spotify-player';


const AlbumDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { albumDetail } = useSelector(state => state.album);

  const spotifyPlayerSize = {
    width: '100%',
    height: 300,
  };

  useEffect(() => {
    fetchFromURL(`albums/${id}`).then(response => {
      if (response.status) {
        dispatch(setAlbumDetail(response.data))
      }
      else {
        if (response.statusCode === 401) {
          localStorage.removeItem('access-token')
          navigate('/login')
        }
      }
    });

  }, [id]);


  return (
    <div className='album-detail'>
      <div className="banner">
        <div>
          <img src={albumDetail?.images[0].url} className="image" alt="" />
        </div>
        <div className="info">
          <div className="label">ALBÜM</div>
          <div className="title">{albumDetail?.name}</div>
          <div className="date">{new Date(albumDetail?.release_date).toLocaleDateString('tr-TR')}</div>
          <Link to={`/artist/${albumDetail?.artists[0].id}`} className="subtitle">{albumDetail?.artists[0].name}</Link>
        </div>
      </div>

      <SpotifyPlayer
        uri={albumDetail?.uri}
        view='list'
        size={spotifyPlayerSize}
      />
    </div>
  )
}

export default AlbumDetail