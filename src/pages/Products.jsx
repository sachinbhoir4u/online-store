import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/slices/productSlice";
import { Grid2, Card, CardContent, Typography, CircularProgress, Box, CardMedia, CardActions, Button } from "@mui/material";

const Products = () => {
  const USD_TO_INR = 86.76;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          {`Error: ${error}`}
        </Typography>
      </Box>
    );
  }
  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid2 container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Products;
