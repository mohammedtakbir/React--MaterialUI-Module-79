import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, colored }) => {
    return (
        <>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold'
            }}>
                <p style={{textAlign: 'center'}}>{title}
                    <span style={{
                        color: '#7AB259',
                        marginLeft: '.5rem'
                    }}>{colored}</span>
                </p>
            </Typography>
        </>
    );
};

export default SectionTitle;