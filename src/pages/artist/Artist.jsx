import './artist.scss'
import { ArtistCard, Loading } from '../../components'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { fetchFromURL } from '../../api/spotify';
import { artistAll } from '../../api/data/artists';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux/actions';

const Artist = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { type } = useParams();

  const { artists } = useSelector(state => state.artist)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    if (type === 'local') {

      // artistAll dizisinin isLocal değeleri true olanları yakarlıyoruz ve id değerleri aralarına virgül ekleyerek birleştiriyoruz. 1,2,3,4,5,6,7 gibi
      const localArtistAll = artistAll.filter(item => item.isLocal).reduce((a, b) => (a.id || a) + ',' + b.id)

      fetchFromURL(`artists?ids=${localArtistAll}`).then(res => {
        if (res.status) {
          dispatch(action.artist.setArtist(res.data.artists))
        }
      })
    }
    else if (type === 'foreign') {

      // artistAll dizisinin isLocal değeleri false olanları yakarlıyoruz ve id değerleri aralarına virgül ekleyerek birleştiriyoruz. 1,2,3,4,5,6,7 gibi
      const foreignArtistAll = artistAll.filter(item => !item.isLocal).reduce((a, b) => (a.id || a) + ',' + b.id)

      fetchFromURL(`artists?ids=${foreignArtistAll}`).then(res => {
        if (res.status) {
          dispatch(action.artist.setArtist(res.data.artists))
        }
      })
    }
  }, [type])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      <h2 className='page-title'>
        {type === 'local' ? 'YERLİ' : 'YABANCI'} Sanatçılar
      </h2>
      {
        loading ?
          <div className='d-flex justify-content-center'>
            <Loading loading={loading} />
          </div>
          :
          <div className='d-flex flex-wrap gap-3 justify-content-center'>
            {
              artists?.map((artist, index) => (
                <React.Fragment key={index}>
                  <ArtistCard
                    id={artist?.id}
                    image={artist?.images[0]?.url}
                    name={artist?.name}
                    followers={artist?.followers.total}
                  />
                </React.Fragment>
              ))
            }
          </div>
      }
    </div>
  )
}

export default Artist