import './artist.scss'
import { ArtistCard } from '../../components'

const Artist = () => {
  return (
    <div>
        <h2 className='page-title'>
           Tüm Sanatçılar
        </h2>
        <ArtistCard />
    </div>
  )
}

export default Artist