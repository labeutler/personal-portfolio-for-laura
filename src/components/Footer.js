import React from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import "../styles/Footer.css";


function Footer() {
    return (
        <div className='socialMedia'>
        <h3>Social Media</h3>
        <SocialIcon url="https://linkedin.com/in/laura-beutler-92987413/" />
        <SocialIcon url="https://github.com/labeutler" />
        <SocialIcon url="https://www.facebook.com/labeutler/" />
        </div>
    )
}

export default Footer