import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Badge, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '/main-logo.svg';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') || null;
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };
    const menuItems = [
        { label: 'Men', to: '/category/men' },
        { label: 'Women', to: '/category/women' },
        // { label: 'Electronics', to: '/category/electronics' },
        // { label: 'Home & Living', to: '/category/home-living' },
        { label: 'Sale', to: '/category/sale' },
        { label: 'About Us', to: '/about-us' },
        { label: 'Contact Us', to: '/contact-us' },
    ];
    // console.log('location.pathname', location.pathname)
    return (
        <AppBar position="fixed" sx={{ width: '100%', height: '64px', backgroundImage: 'linear-gradient(to right, #4CAF50, #2E8B57)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} width="60" height="50" alt="Logo" />
                </Link>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: 'auto', '&:hover > .MuiButton-root': { color: '#ffffff' } }}>
                {menuItems.map((item) => (
                    <Button className='menu-item' key={item.label} color="inherit" component={Link} to={item.to}>
                        {item.label}
                    </Button>
                ))}
                </Box>
                
                <IconButton className='cart-icon' color="inherit" component={Link} to="/cart">
                    <Badge badgeContent={0} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>

                {location.pathname === '' || location.pathname === '/login' || location.pathname === '/signup' ? '' :<Box sx={{ width: 'auto', float: 'right' }}>
                    <Button key={'login'} color="inherit" component={Link} to={isLoggedIn ? '/' : '/login'} sx={{ color: '#fffff', border: '1px solid #7a9c89', '&:hover': { color: '#ffffff', borderColor: '#ffffff' } }} onClick={isLoggedIn ? handleLogout : undefined}>
                        { isLoggedIn ? 'Logout' : 'Login / Signup' }
                    </Button>
                </Box>}

                {isMobile && (
                <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                )}

                {/* Drawer for Mobile Menu */}
                <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                    <List sx={{ width: 250 }}>
                        {menuItems.map((item) => (
                        <ListItem button key={item.label} component={Link} to={item.to} onClick={() => toggleDrawer(false)}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
