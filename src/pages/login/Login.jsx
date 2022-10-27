import './login.scss';
import { FaSpotify } from '../../utils/icon'
import { loginUrl } from '../../api/spotifyAuth'

const Login = () => {
  return (
    <div className='login'>
      <p className='login__text'>Spotify</p>
      <FaSpotify className='login__icon' />
      <a href={loginUrl} className='login__link'>Login</a>
    </div>
  )
}

export default Login