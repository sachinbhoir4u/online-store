import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CategoryAccordion = ({ title, description }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>{description}</Typography>
        </AccordionDetails>
    </Accordion>
);
const AccordionComp = ({caption, content}) => (
    <Container sx={{ my: 1, marginTop: '70px' }}>
        <Typography variant="h4" gutterBottom>{caption}</Typography>
            {content.map((item, index) => (
                <CategoryAccordion key={index} title={item.title} description={item.description} />
        ))}
    </Container>
)

export default AccordionComp;