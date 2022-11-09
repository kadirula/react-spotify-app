import './album.scss'
import { AlbumCard } from '../../components'

const Album = () => {
  return (
    <div>
        <h2 className='page-title'>
            Bulunan Tüm Albümler
        </h2>
        <AlbumCard />
    </div>
  )
}

export default Album