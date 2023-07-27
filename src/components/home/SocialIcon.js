import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// This component is used in the About.js component
// It takes in a link, icon, and label as props
// It returns an anchor tag with the icon passed in as a class name
// The anchor tag has a target="_blank" attribute so that the link opens in a new tab
// The anchor tag has a rel="noopener noreferrer" attribute for security
// The anchor tag has an aria-label attribute for accessibility
// The anchor tag has an href attribute that is the link passed in as a prop
function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <FontAwesomeIcon icon={icon} aria-label={label} />
        </a>
    );
}

export default SocialIcon;