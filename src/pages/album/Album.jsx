import './album.scss'
import { AlbumCard, Loading } from '../../components'
import { fetchFromURL } from '../../api/spotify';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { albumsAll } from '../../api/data/albums';
import { action } from '../../redux/actions';

const Album = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { homeAlbums } = useSelector(state => state.album);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    if (homeAlbums == null) {
      fetchFromURL(`albums?ids=${albumsAll.join(',')}`).then(res => {
        if (res.status) {
          dispatch(action.album.setHomeAlbum(res.data.albums))
        }
        else {
          // TO DO hata mesajı gösterilecek
        }
      })
    }
  }, [])

  return (
    <div>
      <h2 className='page-title'>
        Tüm Albümler
      </h2>
      {
        loading ?
          <div className='d-flex justify-content-center'>
            <Loading loading={loading} />
          </div>
          :
          <div className='d-flex flex-wrap gap-3 justify-content-center'>
            {
              homeAlbums?.map((album, index) => (
                <React.Fragment key={index}>
                  <AlbumCard
                    id={album?.id}
                    image={album.images[0].url}
                    name={album?.name}
                  />
                </React.Fragment>
              ))
            }
          </div>
      }
    </div>
  )
}

export default Album