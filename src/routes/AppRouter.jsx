import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import LoginSignup from '../pages/LoginSignup';
import PageLayout from '../components/PageLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

