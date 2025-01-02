import { Link } from 'react-router-dom';
import { Grid2, Typography, Button, Box, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '2rem 0' }}>
      {/* <Container maxWidth="lg"> */}
        <Grid2 container spacing={4} sx={{  my: 4, alignItems: 'center', justifyContent: 'center'}}>
            {/* <Grid2 item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>Sign Up for Our Newsletter</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                Get the latest news, promotions, and more directly to your inbox!
                </Typography>
                <Grid2 container spacing={2} sx={{ width: '100%' }}>
                    <Grid2 item xs={12} sm={9} md={10}>
                        <Box sx={{ width: '100%' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            '&:hover, & :focus-visible' : {
                                border: '1px solid #ccc',
                            }
                            }}
                        />
                        </Box>
                    </Grid2>

                    <Grid2 item xs={12} sm={3} md={2}>
                        <Box sx={{ width: '100%' }}>
                        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
                            Subscribe
                        </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Grid2> */}
            {/* About Us Section */}
            <Grid2 item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                About Us
                </Typography>
                <Typography variant="body1">
                Learn more about our mission, vision, and products.<br/> We're dedicated to bringing you the best eCommerce experience.
                </Typography>
                <MuiLink component={Link} to="/about-us" variant="body2" color="primary">
                Read More
                </MuiLink>
            </Grid2>

            {/* Customer Service Links */}
            <Grid2 item xs={12} sm={6} md={4}>
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
            <Grid2 item xs={12} sm={6} md={4}>
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
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
