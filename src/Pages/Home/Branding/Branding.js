import { Box, Button, styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Branding = () => {

    const BrandingWrapper = styled(Box)(({ theme }) => ({
        // height: '70vh',
        backgroundColor: 'rgba(122, 178, 89, 0.15)',
        padding: '80px 25px',
        margin: '4rem 0',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2%',
        alignItems: 'center'
    }))

    return (
        <BrandingWrapper>
            <Stack spacing={2} sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '43%',

                }

            }}>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>Let's Grow Your Brand <br /> To The Next Level</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus officiis molestias repudiandae laboriosam aperiam reprehenderit nemo, eius asperiores perferendis magnam vitae explicabo atque culpa magni tempora dolor voluptate fugiat.</Typography>
                <Button sx={{
                    background: '#000',
                    color: 'white',
                    width: '200px'
                }}>Hire Us</Button>
            </Stack>
            <Box sx={{
                width: '55%',
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                }
            }}>
                <img
                    style={{ width: '100%' }}
                    src="https://www.mambamedia.com/wp-content/uploads/branding-services.png"
                    alt=""
                />
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;