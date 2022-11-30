import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const MaterialCard = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1665686310429-ee43624978fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="green iguana"
                    sx={{
                        borderRadius: 1
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="primary.main">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <IconButton>
                    <AddBoxIcon sx={{border: '1px solid #ddd'}} />
                </IconButton>
            </Card>
        </>
    );
};

export default MaterialCard;