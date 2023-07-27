import React from 'react';
import {Box, Grid} from "@mui/material";
import resumeImg from '../img/resume.png';
// returns a box with a grid inside of it
// the grid has two columns on mobile and two columns on desktop
// the grid has a PortfolioBlock component in each column
// the PortfolioBlock component has props passed in from the info object imported from the Info.js file

export default function Resume() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                <object data={resumeImg} type="image/png" width="100%" height="500px">
                    <p>Unable to display file. <a href={resumeImg}>Download</a> instead.</p>
                </object>
            </Grid>
        </Box>
    );
};