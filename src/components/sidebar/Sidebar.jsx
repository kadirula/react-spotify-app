import './sidebar.scss'
import { FaSpotify, FaHome, BiSearch, BiPowerOff, BiUserCheck, BsMusicNote, BsMusicNoteList } from '../../utils/icon'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Tag } from '../index'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='sidebar mini'>

      <div className="sidebar__box">
        <Link to='/' className="sidebar__logo">
          <FaSpotify className='sidebar__logo-icon' /> <span className='sidebar__logo-text'>Spotify App</span>
        </Link>
      </div>

      <div className="sidebar__box">
        <span>Menü</span>
        <div className="sidebar__menu">
          <NavLink to='/' className='sidebar__menu-item'> <FaHome /><span>Anasayfa</span></NavLink>
          <NavLink to='/search' className='sidebar__menu-item'> <BiSearch /><span>Ara</span></NavLink>
          <div
            className='sidebar__menu-item'
            onClick={() => {
              localStorage.removeItem("access-token")
              navigate('/login')
            }}
          >
            <BiPowerOff /><span>Çıkış Yap</span>
          </div>

        </div>
      </div>

      <div className="sidebar__box">
        <span>Diğer</span>
        <div className="sidebar__menu">
          <NavLink to='/popular-artist' className='sidebar__menu-item'> <BiUserCheck /><span>Popüler Sanatçılar</span></NavLink>
          <NavLink to='/artist' className='sidebar__menu-item'> <BsMusicNote /> <span>Artist</span></NavLink>
          <NavLink to='/albums' className='sidebar__menu-item'> <BsMusicNoteList /> <span>Albums</span></NavLink>
          <NavLink to='/albums' className='sidebar__menu-item'> <FaHome /><span>Popüler Sanatçılar</span></NavLink>
        </div>
      </div>

      <div className="sidebar__box">
        <span>Tags</span>
        <Tag />
      </div>

    </div>
  )
}

export default Sidebar