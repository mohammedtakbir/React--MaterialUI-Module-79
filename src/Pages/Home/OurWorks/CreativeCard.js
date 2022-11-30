import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { IconButton, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreativeCard = ({img}) => {
    const theme = useTheme();
    return (
        <>
            <Card sx={{
                maxWidth: 345,
                p: 2
            }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="green iguana"
                    sx={{
                        borderRadius: '4px'
                    }}
                />
                <CardContent sx={{
                    p: 0,
                    '&:last-child': {
                        pb: 0
                    }
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2 }}>
                                Web Design
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Web design research
                            </Typography>
                        </Box>
                        <IconButton sx={{
                            border: `1px solid ${theme.palette.primary.main}`,
                            height: '30px',
                            width: '30px',
                            '& svg': {
                                color: 'primary.main'
                            }
                        }}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default CreativeCard;