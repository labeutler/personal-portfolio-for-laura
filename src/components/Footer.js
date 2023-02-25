import React from 'react';

import { SocialIcon } from 'react-social-icons';
import "../styles/Footer.css";

// creating links for social media
function Footer() {
    return (
        <footer>
            <div className='socialMedia' >
                <h3>Social Media</h3>
                <SocialIcon url="https://linkedin.com/in/laura-beutler-92987413/" />
                <SocialIcon url="https://github.com/labeutler" />
                <SocialIcon url="https://www.facebook.com/labeutler/" />
            </div>
        </footer>
    )
}

export default Footer;