import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CreativeAccordion = ({ title, description }) => {

    const CustomExpandIcon = () => {
        return (
            <div>
                <div className="expandIcon">
                    <AddIcon />
                </div>
                <div className="removeIcon">
                    <RemoveIcon />
                </div>
            </div>
        )
    }

    return (
        <>
            <Accordion sx={{
                boxShadow: 'none',
                border: '1px solid #ddd',
                '& .Mui-expanded': {
                    '& .expandIcon': {
                        display: 'none'
                    },
                    '& .removeIcon': {
                        display: 'block',
                        '& svg': {
                            color: 'primary.green'
                        }
                    }
                }
            }}>
                <AccordionSummary
                    sx={{
                        '& .removeIcon': {
                            display: 'none'
                        },
                        '& p': {
                            // color: 'primary.green',
                            fontWeight: 'bold'
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: 'primary.green'
                            }
                        }
                    }}
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default CreativeAccordion;