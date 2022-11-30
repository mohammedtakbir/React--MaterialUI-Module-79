import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({ img }) => {
    return (
        <>
            <Card sx={{
                maxWidth: 345,
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: '0 0 10px 0 #ddd'
                },
                mx: 'auto'
            }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="green iguana"
                    sx={{
                        width: 'auto',
                        margin: '10px auto',
                    }}
                />
                <CardContent sx={{
                    textAlign: 'center'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Service;