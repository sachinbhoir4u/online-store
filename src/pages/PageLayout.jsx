import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default PageLayout;
