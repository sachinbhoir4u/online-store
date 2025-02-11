import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, CircularProgress, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/slices/productSlice";

const ViewProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { viewProduct, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  if (loading) {
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={{ padding: "5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card 
            sx={{
            display: "flex",
            width: "80%",
            border: "none",
            boxShadow: "none",
            }}
        >
            <CardMedia
            component="img"
            alt={viewProduct?.title}
            height="300"
            image={viewProduct?.image}
            sx={{ objectFit: "contain", width: "400px" }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingLeft: "5rem" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {viewProduct?.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: "10px" }}>
                    {viewProduct?.description}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    ${viewProduct?.price}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "20px" }}
                    onClick={() => alert("Added to cart!")}
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
        </Box>
    </>
  );
};

export default ViewProduct;
