import { useParams } from 'react-router-dom'
import './artistDetail.scss'

const ArtistDetail = () => {
  const { id } = useParams();
  return (
    <div>ArtistDetail = {id}</div>
  )
}

export default ArtistDetail