import './search.scss';
import { SearchArtistSection, Loading, Search as SearchComponent, SearchAlbumSection, SearchPlaylistSection } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { action } from '../../redux/actions';

const Search = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.site);

    useEffect(() => {
        setTimeout(() => {
            dispatch(action.site.setLoading(false))
        }, 2000);

    }, [loading])

    return (
        <>
            {
                loading ?
                    <div className='d-flex justify-content-center py-5'>
                        <Loading loading={loading} />
                    </div>
                    :
                    <>
                        <div className="search-section search-section--search">
                            <SearchComponent />
                        </div>

                        <div className="search-section">
                            <h2 className="search-section__title">
                                Sanatçılar
                            </h2>
                            <SearchArtistSection />
                        </div>

                        <div className="search-section">
                            <h2 className="search-section__title">
                                Albümler
                            </h2>
                            <SearchAlbumSection />
                        </div>

                        <div className="search-section">
                            <h2 className="search-section__title">
                                Çalma Listeleri
                            </h2>
                            <SearchPlaylistSection />
                        </div>
                    </>
            }
        </>
    )
}

export default Search