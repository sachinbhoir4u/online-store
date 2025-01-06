import { Link } from 'react-router-dom';
import { Grid2, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '2rem 0' }}>
      <Grid2 className='footer-sect' container spacing={4} sx={{ my: 4, alignItems: 'stretch', justifyContent: 'center' }}>
        
        {/* About Us Section */}
        <Grid2 item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            Learn more about our mission,<br/> vision, and products.
          </Typography>
          <MuiLink component={Link} to="/about-us" variant="body2" color="primary">
            Read More
          </MuiLink>
        </Grid2>

        {/* Customer Service Links */}
        <Grid2 item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
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
        </Grid2>

        {/* Social Media Links */}
        <Grid2 item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
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
        </Grid2>
      </Grid2>

      {/* Footer Bottom */}
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '2rem' }}>
        &copy; {new Date().getFullYear()} SB online store. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
