import { Button, Divider, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#090A27',
            p: 4
        }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}>Creative Agency</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', marginRight: '1rem'}}>Creative Agency</Typography>
                        <Button sx={{
                            backgroundColor: 'primary.green',
                            '&:hover': {
                                backgroundColor: 'primary.green',
                            }
                        }}>get Started</Button>
                    </Box>
                </Box>
                <Divider sx={{backgroundColor: 'rgba(255, 255, 255, 0.6)', mt: 2}} />
            </Container>
        </Box>
    );
};

export default Footer;