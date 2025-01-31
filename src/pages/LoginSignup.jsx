import { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Tab, Tabs, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header'
import GoogleLogin from '../components/GoogleLogin';

const LoginSignup = () => {
    const [tabValue, setTabValue] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate ();
    const location = useLocation();

    // const [isFocused, setIsFocused] = useState(false);
    // useEffect(() => {
    //     let lgCont = document.getElementById('login-container');
    //     console.log('lgCont', lgCont);
    //     if(lgCont){
    //         lgCont.addEventListener('onClick', () => {
    //         console.log('event happened');
    //     });}
    // })

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('user');
        if (isLoggedIn) {
            navigate('/home');
            setError('');
        }
    }, [navigate]);
    
    useEffect(() => {
        if (location.pathname === '/signup') {
            setTabValue(1);
            if (email && name && password && confirmPassword) {
                setError('');
            }
        } else {
            setTabValue(0);
            if (email && password) {
                setError('');
            }
        }
    }, [location.pathname, email, name, password, confirmPassword]);

    const handleTabChange = (e, newValue) => {
        setTabValue(newValue);
        if (newValue === 0) {
            navigate('/login');
        } else {
            navigate('/signup');
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
        return;
        }
        if (email === 'user@example.com' && password === 'asdfgh@123') {
            localStorage.setItem('user', email);
            navigate('/home');
        } else {
            setError('Invalid email or password.');
        }
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        setError('');
        localStorage.setItem('user', email);
        navigate('/home');
    };

    return (
        <>  
            <Header/>
            <div className='login-body'>
                <Container id='login-container' maxWidth="xs" sx={{ paddingTop: '30px', height: '500px' }}>
                    <Box sx={{ my: 4, marginTop: '64px' }}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Tabs value={tabValue} onChange={handleTabChange} centered  TabIndicatorProps={{ style: { backgroundColor: '#333333' } }}>
                                <Tab label="Login" className={`${tabValue === 0 ? 'tabs active' : 'tabs'}`}/>
                                <Tab label="Sign Up" className={`${tabValue === 0 ? 'tabs' : 'tabs active'}`}/>
                            </Tabs>

                            {tabValue === 0 && (
                                <Box sx={{ mt: 2 }}>
                                    {error && <Typography color="error" variant="body2">{error}</Typography>}
                                    <form onSubmit={handleLoginSubmit}>
                                        <TextField className='text-box' label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                                        {/* slotProps={{ inputLabel: { shrink: true } }} */}
                                        <TextField className='text-box' label="Password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                                        {/* slotProps={{ inputLabel: { shrink: password.length > 0 } }}  */}
                                        <Button className='solid-button' variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2, '&:focus, &focus-visible': { outline: 'none' } }}>Login</Button>
                                    </form>
                                </Box>
                            )}

                            {tabValue === 1 && (
                                <Box sx={{ mt: 2 }}>
                                    {error && <Typography color="error" variant="body2">{error}</Typography>}
                                    <form onSubmit={handleSignupSubmit}>
                                        <TextField className='text-box' label="Full Name" variant="outlined" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} type="text" />

                                        <TextField className='text-box' label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

                                        <TextField className='text-box' label="Password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

                                        <TextField className='text-box' label="Confirm Password" variant="outlined" fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" />
                                        
                                        <Button className='solid-button' variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2, '&:focus, &focus-visible': { outline: 'none' } }}>
                                        Sign Up
                                        </Button>
                                    </form>
                                </Box>
                            )}
                        {/* Google Login */}
                        <GoogleLogin />
                        </Paper>
                        
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default LoginSignup;