import './album.scss'
import { AlbumCard } from '../../components'

const Album = () => {
  return (
    <div>
      <h2 className='page-title'>
        Tüm Albümler
      </h2>
      <AlbumCard />
    </div>
  )
}

export default Album