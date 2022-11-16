import './error.scss'
import { useSelector } from 'react-redux'

const Error = () => {

  const { error } = useSelector(state => state.site);

  console.log(error);

  return (
    <div className="section">
      <h2 className="section__title d-block text-center">
        HATA
      </h2>
      <div className='error'>
        <div className="error__status">{error?.data.error.status}</div>
        <div className="error__message">{error?.data.error.message}</div>
      </div>
    </div>
  )
}

export default Error