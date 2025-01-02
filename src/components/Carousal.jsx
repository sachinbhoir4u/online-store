import { Box } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import carousal1 from '../assets/images/carousel1.jpg'
import carousal2 from '../assets/images/carousel2.jpg'
import carousal3 from '../assets/images/carousel3.jpg'

const Carousal = () => {
    return (
      <div>
      <Box sx={{ my: 5, marginTop:'64px', height: '400px' }}>
        <Carousel sx={{ maxHeight: '400px' }} showStatus={false} showArrows={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
            <div>
            <img src={carousal1} alt="Featured Product 1" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            {/* <Typography variant="h6" sx={{ textAlign: 'center', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>Featured Product 1</Typography> */}
            </div>
            <div>
            <img src={carousal2} alt="Featured Product 2" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            {/* <Typography variant="h6" sx={{ textAlign: 'center', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>Featured Product 2</Typography> */}
            </div>
            <div>
            <img src={carousal3} alt="Featured Product 3" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            {/* <Typography variant="h6" sx={{ textAlign: 'center', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>Featured Product 3</Typography> */}
            </div>
        </Carousel>
    </Box>
    </div>
    )
}

export default Carousal