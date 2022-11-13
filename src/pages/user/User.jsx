import { useParams } from 'react-router-dom'
import './user.scss'

const User = () => {

    const { id } = useParams();

  return (
    <div className='user' style={{color: 'white'}}>User: {id}</div>
  )
}

export default User