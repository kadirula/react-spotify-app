import './playlist.scss'
import { PlaylistCard } from '../../components'

const Playlist = () => {
  return (
    <div>
      <h2 className='page-title'>
        Tüm Oynatma Listeleri
      </h2>
      <PlaylistCard />
    </div>
  )
}

export default Playlist