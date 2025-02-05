import { Container, Grid2, CardActions, Typography, Button, Card, CardContent, CardMedia, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import Carousal from '../components/Carousal';

const featuredProducts = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', image: 'https://placehold.co/250x250', price: '$29.99' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', image: 'https://placehold.co/250x250?text=Product', price: '$49.99' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', image: 'https://placehold.co/250x250', price: '$19.99' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', image: 'https://placehold.co/250x250?text=Product', price: '$39.99' }
]
const images = [
    'https://placehold.co/1900x500?text=Your Perfect Find Is Just a Click Away',
    'https://placehold.co/1900x500?text=Shop the Latest Trends',
    'https://placehold.co/1900x500?text=Don’t miss out on the latest drops',
    'https://placehold.co/1900x500?text=Get more with exclusive deals and new arrivals',
  ];

const Home = () => {
  return (
    <div>
        {/* Header Section */}
        <Header />
        {/* Carousel Section */}
        <Carousal images={images} />

        <Box sx={{ height: 'auto', backgroundImage: 'url(/path/to/hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
            <Typography variant="h2" color="#333333" sx={{ fontWeight: 'bold' }}>Welcome to Our Store</Typography>
        </Box>

        <Container sx={{ my: 1, marginTop: '70px' }}>
            <Typography variant="h4" gutterBottom>Shop by Category</Typography>
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Men's Fashion</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Explore the latest trends in men's clothing, shoes, and accessories.</Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Women's Fashion</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Discover stylish and trendy women's fashion collections.</Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Electronics</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Find the latest gadgets, smartphones, and accessories.</Typography>
            </AccordionDetails>
            </Accordion>
        </Container>

        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>Featured Products</Typography>
            <Grid2 container spacing={4}>
            {featuredProducts.map((product, index) => (
                <Grid2 item xs={12} sm={6} md={4} key={index}>
                <Card>
                    <CardMedia
                    component="img"
                    alt={product.name}
                    height="250"
                    image={product.image}
                    />
                    <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{product.price}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">Add to Cart</Button>
                    <Button size="small" color="secondary">View Details</Button>
                    </CardActions>
                </Card>
                </Grid2>
            ))}
            </Grid2>
        </Container>

        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>Customer Testimonials</Typography>
            <Grid2 container spacing={4}>
                <Grid2 item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
                        <Typography variant="body1">"Amazing products and fast delivery! Will shop again."</Typography>
                        <Typography variant="subtitle2" color="textSecondary">- John Doe</Typography>
                    </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
                        <Typography variant="body1">"Great experience, the website is easy to navigate."</Typography>
                        <Typography variant="subtitle2" color="textSecondary">- Jane Smith</Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
        {/* Footer Section */}
        <Footer />
    </div>
  );
};

export default Home;
