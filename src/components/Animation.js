import React, { useEffect } from 'react';
import particlesJS from 'particles.js'; // Remember to install this package via npm or yarn

const Animation = () => {
    useEffect(() => {
        particlesJS.load('particles-js', 'path_to_your_particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }, []);

    return (
        <div id="particles-js"></div>
    )
};

export default Animation;
