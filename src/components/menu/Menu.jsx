import './menu.scss';
import { FaHome, BiPowerOff, BiUserCheck, BsMusicNote } from '../../utils/icon'
import { NavLink, useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate();
    
    return (
        <div className="menu">
            <NavLink end to='/' className='menu__item'> <FaHome /><span>Anasayfa</span></NavLink>
            <NavLink to='/popular-artist' className='menu__item'> <BiUserCheck /><span>Popüler Yerli Sanatçılar</span></NavLink>
            <NavLink to='/artist' className='menu__item'> <BsMusicNote /> <span>En Çok Dinlenen Albümler</span></NavLink>
            <NavLink to='/albums' className='menu__item'> <FaHome /><span>Popüler Yabancı Sanatçılar</span></NavLink>
            <div
                className='menu__item'
                onClick={() => {
                    localStorage.removeItem("access-token")
                    navigate('/login')
                }}
            >
                <BiPowerOff /><span>Çıkış Yap</span>
            </div>
        </div>
    )
}

export default Menu