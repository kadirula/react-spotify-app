import './notFound.scss'
import NotFoundImage from '../../assets/not-found.png';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={NotFoundImage} alt="" />
    </div>
  )
}

export default NotFound