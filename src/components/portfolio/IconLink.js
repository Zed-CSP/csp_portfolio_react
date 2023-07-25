import React from 'react';

// This component is used in the About.js component
// It takes in a link, title, and icon as props
// It returns an anchor tag with the icon passed in as a class name
// The anchor tag has a target="_blank" attribute so that the link opens in a new tab
function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;