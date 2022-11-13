import './sidebar.scss'
import { FaSpotify } from '../../utils/icon'
import { Link } from 'react-router-dom'
import { Search, Menu } from '../index';

const Sidebar = () => {

  return (
    <div className='sidebar mini'>

      <div className="sidebar__box">
        <Link to='/' className="sidebar__logo">
          <FaSpotify className='sidebar__logo-icon' /> <span className='sidebar__logo-text'>Spotify App</span>
        </Link>
      </div>

      <div className="sidebar__box">
        <Search />
      </div>

      <div className="sidebar__box">
        <span>Menü</span>
        <Menu />
      </div>

    </div>
  )
}

export default Sidebar