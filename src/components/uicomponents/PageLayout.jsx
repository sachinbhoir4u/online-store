// import { Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div>
      <Header />
      <div className="page-layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
