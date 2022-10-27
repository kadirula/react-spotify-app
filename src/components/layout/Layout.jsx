import { Sidebar } from '../index';
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const Layout = () => {
  return (
    <div className='app'>
      <Container>
        <div className='main'>
          <Sidebar />
          <div className='main__content'>
            <Outlet />
          </div>
        </div>
      </Container>
    </div >
  )
};

export default Layout;