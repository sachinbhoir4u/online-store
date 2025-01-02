import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LoginSignup from '../pages/LoginSignup';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/signup" element={<LoginSignup/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
