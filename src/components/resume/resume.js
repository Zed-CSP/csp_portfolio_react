import React from 'react';
import {Box, Grid} from "@mui/material";

// returns a box with a grid inside of it
// the grid has two columns on mobile and two columns on desktop
// the grid has a PortfolioBlock component in each column
// the PortfolioBlock component has props passed in from the info object imported from the Info.js file

export default function Resume() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                <object data="../img/christopherPeretResumeDev.pdf" type="application/pdf" width="100%" height="500px">
                    <p>Unable to display PDF file. <a href="../img/christopherPeretResumeDev.pdf"
                    >Download</a> instead.</p>
                </object>
            </Grid>
        </Box>
    );
};