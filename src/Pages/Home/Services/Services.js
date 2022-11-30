import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import Service from './Service';

const Services = () => {

    const serviceImages = [
        'https://i.ibb.co/HNhykGp/iphone-1.png',
        'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        'https://i.ibb.co/CvQwzKC/coding-1.png',
    ];

    return (
        <>
            <Box>
                <SectionTitle title={'Provide Awesome'} colored={'services'} />

                <Grid container spacing={2} sx={{paddingBottom: '20px'}}>
                    {
                        serviceImages.map((img, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Service img={img} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Services;