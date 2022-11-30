import { Box } from '@mui/system';
import React from 'react';
import CreativeAccordion from '../../../Component/CreativeAccordion';
import SectionTitle from '../../../Component/SectionTitle';

const Faq = () => {
    return (
        <div>
            <SectionTitle title={'Frequently Asked'} colored={'Question'} />
            <Box sx={{
                mb:5,
                display:'flex',
                flexDirection: 'column',
                rowGap: '1rem'
            }}>
            <CreativeAccordion
                title={'Accordion 1'}
                description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            />
            <CreativeAccordion
                title={'Accordion 2'}
                description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            />
            <CreativeAccordion
                title={'Accordion 3'}
                description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            />
            </Box>
        </div>
    );
};

export default Faq;