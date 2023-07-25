import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    // returns a box with a span inside of it
    // the span has an aria-label attribute that is the emoji passed in as a prop
    // the span has a role="img" attribute for accessibility
    // the span has a margin-right that is responsive
    
    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;