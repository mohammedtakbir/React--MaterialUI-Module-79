import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <Box>
            <Container>
                <Navbar />
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
};

export default Main;