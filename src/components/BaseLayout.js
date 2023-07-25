import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   // funtion that will toggle the darkMode state
   // the darkMode state will be saved to localStorage
   // the darkMode state will be used to determine the className of the box
   // the darkMode state will be used to determine the style object of the box
   
   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   // returns a box with a grid inside of it
   // the grid has three rows
   // the first row is the navbar
   // the second row is the routes
   // the third row is the footer
   // the box has a className that is either the dark or light className depending on the darkMode state
   // the box has a style object that will transition the background color when the darkMode state changes

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>CSP-DEV Portfolio for UC Berkeley Extension<a href={'https:github.com/zed-csp'}>Zed-CSP</a></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

