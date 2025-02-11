import { Container, Grid2, CardActions, Typography, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import Carousal from '../components/Carousal';
import AccordionComp from '../components/AccordionComp';

const categoryList = [
    { title: "Men's Fashion", description: "Explore the latest trends in men's clothing, shoes, and accessories." },
    { title: "Women's Fashion", description: "Discover stylish and trendy women's fashion collections." },
    { title: "Electronics", description: "Find the latest gadgets, smartphones, and accessories." }
];

const featuredProducts = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', image: 'https://placehold.co/250x250', price: '$29.99' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', image: 'https://placehold.co/250x250?text=Product', price: '$49.99' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', image: 'https://placehold.co/250x250', price: '$19.99' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', image: 'https://placehold.co/250x250?text=Product', price: '$39.99' }
];

const images = [
    'https://placehold.co/1900x500?text=Your Perfect Find Is Just a Click Away',
    'https://placehold.co/1900x500?text=Shop the Latest Trends',
    'https://placehold.co/1900x500?text=Don’t miss out on the latest drops',
    'https://placehold.co/1900x500?text=Get more with exclusive deals and new arrivals.',
];

// Product Card Component for Featured Products
const ProductCard = ({ product }) => (
    <Grid2 item xs={12} sm={6} md={4} key={product.id}>
        <Card>
            <CardMedia component="img" alt={product.name} height="250" image={product.image} />
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
);

// Testimonial Box Component
const TestimonialBox = ({ text, author }) => (
    <Grid2 item xs={12} sm={6} md={4}>
        <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="body1">"{text}"</Typography>
            <Typography variant="subtitle2" color="textSecondary">- {author}</Typography>
        </Box>
    </Grid2>
);

const Home = () => {
  return (
    <>
        {/* Carousel Section */}
        <Carousal images={images} />

        <Box sx={{ 
            height: 'auto', 
            backgroundImage: 'url(/path/to/hero-image.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '40px' 
        }}>
            <Typography variant="h2" color="#333333" sx={{ fontWeight: 'bold' }}>Welcome to Our Store</Typography>
        </Box>

        {/* Accordion Component section */}
        <AccordionComp caption={'Shop by Category'} content={categoryList} />

        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>Featured Products</Typography>
            <Grid2 container spacing={4}>
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid2>
        </Container>

        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>Customer Testimonials</Typography>
            <Grid2 container spacing={4}>
                {[ 
                    { text: "Amazing products and fast delivery! Will shop again.", author: "John Doe" },
                    { text: "Great experience, the website is easy to navigate.", author: "Jane Smith" }
                ].map((testimonial, index) => (
                    <TestimonialBox key={index} text={testimonial.text} author={testimonial.author} />
                ))}
            </Grid2>
        </Container>
    </>
  );
};

export default Home;
