import { Link } from 'react-router-dom';
import { Typography, Container, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '2rem 0' }}>
      <Container>
      <div className='flex-container'>
        <div className='item'>
          <h3 className="ite">About Us</h3>
          <Typography variant="body1">
            Learn more about our mission,<br/> vision, and products.
          </Typography>
          <MuiLink component={Link} to="/about-us" variant="body2" color="primary">
            Read More
          </MuiLink>
        </div>
        <div className='item'>
          <h3 className="ite">Customer Service</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <MuiLink component={Link} to="/terms-and-conditions" variant="body2" color="primary">
                  Terms & Conditions
                </MuiLink>
              </li>
              <li>
                <MuiLink component={Link} to="/privacy-policy" variant="body2" color="primary">
                  Privacy Policy
                </MuiLink>
              </li>
              <li>
                <MuiLink component={Link} to="/contact-us" variant="body2" color="primary">
                  Contact Us
                </MuiLink>
              </li>
            </ul>
        </div>
        <div className='item'>
          <h3 className="ite">Connect With Us</h3>
          <ul className='item' style={{ listStyle: 'none', padding: 0 }}>
          <li>
                <MuiLink href="https://www.facebook.com" target="_blank" variant="body2" color="primary">
                  Facebook
                </MuiLink>
              </li>
              <li>
                <MuiLink href="https://www.instagram.com" target="_blank" variant="body2" color="primary">
                  Instagram
                </MuiLink>
              </li>
              <li>
                <MuiLink href="https://twitter.com" target="_blank" variant="body2" color="primary">
                  Twitter
                </MuiLink>
              </li>
            </ul>
        </div>
      </div>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '2rem' }}>
        &copy; {new Date().getFullYear()} SB online store. All rights reserved.
      </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
