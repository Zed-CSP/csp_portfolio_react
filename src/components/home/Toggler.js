import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease' // this is a string that will be used in the style object below


   // returns a box with a moon or sun emoji depending on the darkMode prop
   // the box has a style object that will transition the emoji when the mouse hovers over it
   // the box has an onClick handler that will call the handleClick function passed in as a prop
   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
}