import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Badge, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '/main-logo.svg';
import ScrollToTopButton from './ScrollToTopButton';
import UserDetails from './UserDetails';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };
    
    const menuItems = [
        { label: 'Men', to: '/category/men' },
        { label: 'Women', to: '/category/women' },
        // { label: 'Electronics', to: '/category/electronics' },
        // { label: 'Home & Living', to: '/category/home-living' },
        // { label: 'Products', to: '/products' },
        { label: 'Sale', to: '/category/sale' },
        { label: 'About Us', to: '/about-us' },
        { label: 'Contact Us', to: '/contact-us' },
    ];
    // console.log('location.pathname', location.pathname)
    
    return (
        <AppBar position="fixed" sx={{ width: '100%', height: '64px', backgroundColor: '#2962FF' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} width="60" height="50" alt="Logo" />
                </Link>

                <Box sx={{ color: '#FFFFFF', display: { xs: 'none', sm: 'none', md: 'flex' }, width: 'auto', '&:hover > .MuiButton-root': { color: '#FFFFFF' } }}>
                {menuItems.map((item) => (
                    <Button className='menu-item' key={item.label} color="inherit" component={Link} to={item.to}>
                        {item.label}
                    </Button>
                ))}
                </Box>
                
                <IconButton className='cart-icon' component={Link} to="/cart">
                    <Badge badgeContent={0} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>

                {/* user avatar and details */}
                <UserDetails />

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
            <ScrollToTopButton />
        </AppBar>
    );
};

export default Header;
