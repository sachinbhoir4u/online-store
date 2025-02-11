import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/slices/productSlice";
import { Container, Grid2, CardActions, Typography, Button, Card, CardContent, CardMedia, Box } from "@mui/material";
import Carousal from "../components/Carousal";
import AccordionComp from "../components/AccordionComp";

const categoryList = [
    { title: "Men's Fashion", description: "Explore the latest trends in men's clothing, shoes, and accessories." },
    { title: "Women's Fashion", description: "Discover stylish and trendy women's fashion collections." },
    { title: "Electronics", description: "Find the latest gadgets, smartphones, and accessories." }
];

const images = [
    "https://placehold.co/1900x500?text=Your Perfect Find Is Just a Click Away",
    "https://placehold.co/1900x500?text=Shop the Latest Trends",
    "https://placehold.co/1900x500?text=Don’t miss out on the latest drops",
    "https://placehold.co/1900x500?text=Get more with exclusive deals and new arrivals.",
];
const USD_TO_INR = 86.76;
const ProductCard = ({ product }) => (
        //   <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Box sx={{ display: "flex", justifyContent: "center" }}  key={product.id}>
              <Card
                sx={{
                    width: 260,
                    height: 380,
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    }
                }}
              >
                <CardMedia
                  component="img"
                  alt={product.title}
                  height="200"
                  image={product.image}
                  sx={{
                    paddingTop: "15px",
                    objectFit: "contain",
                    // backgroundColor: "#f7f7f7",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "8px",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: "8px" }}>
                    {product.category}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: "8px" }}>
                    ₹{new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.price * USD_TO_INR)}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between", padding: "10px" }}>
                  <Button size="small" variant="contained" color="primary">Add to Cart</Button>
                  <Button size="small" variant="outlined" color="secondary" sx={{
                    borderColor: "black",
                    color: "black",
                    backgroundColor: "white",
                    "&:hover": {
                    borderColor: "black",
                    backgroundColor: "rgba(0, 0, 0, 0.05)", 
                    },
                    }} onClick={() => handleViewDetails(product.id)}>View Details</Button>
                </CardActions>
              </Card>
            </Box>
);

// Testimonial Box Component
const TestimonialBox = ({ text, author }) => (
    <Grid2 item xs={12} sm={6} md={4}>
        <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="body1">{text}</Typography>
            <Typography variant="subtitle2" color="textSecondary">- {author}</Typography>
        </Box>
    </Grid2>
);

const Home = () => {
    
    const dispatch = useDispatch();
  const navigate = useNavigate();
    const { products: featuredProducts, loading, error } = useSelector(state => state.products);

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  return (
    <>
        {/* Carousel Section */}
        <Carousal images={images} />

        <Box sx={{ 
            height: "auto", 
            backgroundImage: "url(/path/to/hero-image.jpg)", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            marginTop: "40px" 
        }}>
            <Typography variant="h2" color="#333333" sx={{ fontWeight: "bold" }}>Welcome to Our Store</Typography>
        </Box>

        {/* Accordion Component section */}
        <AccordionComp caption={"Shop by Category"} content={categoryList} />

        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>Featured Products</Typography>
            <Grid2 container spacing={4}>
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid2>
        </Container>
        {/* <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>Featured Products</Typography>
            <Products/>
        </Container> */}
        

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
