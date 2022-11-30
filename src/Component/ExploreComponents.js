import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import { Alert, Avatar, Button, createTheme, CssBaseline, IconButton, Paper, Rating, Switch, TextField, ThemeProvider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import MaterialCard from './MaterialCard';

const ExploreComponents = () => {

    const [darkMode, setDarkMode] = useState(false);

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#f08080'
            }
        }
    })
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#ADD8E6'
            }
        }
    })

    const [rating, setRating] = useState(2);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setSubmitting(false)
        }, 1000)

        return () => {
            clearTimeout(id)
        }

    }, [submitting]);

    const isActive = true;

    return (
        <>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <div className="App">
                    <div style={{
                        backgroundColor: '#f7f7f7',
                        width: '400px',
                        borderRadius: '1rem',
                        padding: '1rem',
                    }}>
                        <Button variant='contained' color='warning' disableRipple={false} fullWidth={true} sx={{ mb: 2 }}>Contained</Button>
                        <LoadingButton
                            loading={submitting}
                            onClick={() => setSubmitting(true)}
                            // loadingIndicator="Loading…"
                            variant="outlined">
                            Fetch data
                        </LoadingButton>
                        <Typography variant="h5" component='h1' gutterBottom noWrap>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Avatar sx={{ width: '80px', height: '80px' }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NcXil-zvsEbK0YBf9F8FuMzquqIGHTAbRedKI8s&s" />

                        <TwitterIcon sx={{
                            color: '#1A8CD8',
                            fontSize: '2rem'
                        }} />

                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>

                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />

                        <TextField
                            sx={{ mt: 2 }}
                            helperText="Invalid Input"
                            error={true}
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />

                        <Alert severity="error" sx={{ mb: 2 }}>This is an error alert — check it out!</Alert>

                        <Button variant="contained" sx={[{
                            border: '2px solid red',
                            backgroundColor: 'green',
                            // padding: 1
                            p: 2,
                            /* width: { //* responsive styling
                              xs: 100,
                              sm: 200,
                              md: 250,
                              lg: 280,
                              xl: 300,
                            }, */
                            width: [100, 150, 200, 250, 300], //* responsive styling
                            '&.MuiButton-root': {
                                padding: '3rem'
                            }
                        },
                        isActive && {
                            backgroundColor: 'lightcoral'
                        }
                        ]}>
                            SX PROPS
                        </Button>

                    </div>

                    <Box sx={{
                        width: '400px',
                        height: '400px',
                        backgroundColor: 'lightcyan'
                    }}>

                    </Box>

                    <MaterialCard />

                    <Paper sx={{
                        width: '100px',
                        height: '100px'
                    }}>
                        <Switch onClick={() => setDarkMode(!darkMode)} />
                    </Paper>

                </div>
            </ThemeProvider>
        </>
    );
};

export default ExploreComponents;