import { useState, useEffect } from 'react'
import './search.scss';
import { BiSearch } from '../../utils/icon'
import { fetchFromURL } from '../../api/spotify';
import { getAuth } from '../../api/spotifyAuth';

const Search = () => {

  const [searchText, setSearchText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const types = 'album%2Cartist%2Cplaylist%2Ctrack'

    fetchFromURL(`search?query=${searchText}&type=${types}`).then(data => {
      if (data.status) {
        console.log(data);
      }
      else {
        console.log(data.err);
      }
    })
  }


  return (
    <>
      <form className='search' onSubmit={(e) => handleSubmit(e)}>
        <div className="search__item">
          <input
            type="text"
            placeholder='Search...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button><BiSearch /></button>
        </div>
      </form>
    </>
  )
}

export default Search