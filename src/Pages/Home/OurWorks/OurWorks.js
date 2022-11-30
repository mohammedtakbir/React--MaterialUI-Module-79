import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Grid, IconButton, Tab, Tabs } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import { cardData } from './cardData';
import CreativeCard from './CreativeCard';

const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <SectionTitle title={'Here are some works'} colored={'our works'} />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{
                        '& .MuiTabs-indicator': {
                            display: 'none'
                        },
                        '& .Mui-selected': {
                            color: 'primary.green',
                            // fontWeight: 'bold'
                        },
                        '& .MuiButtonBase-root': {
                            textTransform: 'capitalize'
                        }
                    }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Mobile Apps" />
                    </Tabs>
                    <IconButton
                        onClick={() => setValue(value - 1)}
                        disabled={value === 0}
                        sx={{
                            border: `1px solid ${value === 0 ? '#ddd' : '#000'}`
                        }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => setValue(value + 1)}
                        disabled={value === 2}
                        sx={{
                            border: `1px solid ${value === 2 ? '#ddd' : '#000'}`
                        }}>
                        <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{
                marginBottom: '30px'
            }}>
                <Grid container spacing={2} justifyContent='center'>
                    {
                        cardData[value].map((img, i) => (
                            <Grid item >
                                <CreativeCard img={img} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

        </Box>
    );
};

export default OurWorks;