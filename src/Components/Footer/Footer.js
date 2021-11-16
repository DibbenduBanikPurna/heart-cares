import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Consultent</li>
                            <li>Medicine Specialist</li>
                            <li>Physcologist</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li>Online Services</li>
                            <li>Contact us</li>
                            <li>Accessability</li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Heart -Care</h3>
                        <p>Our team can help patients gain access to a primary care physician and other vital, often free, services to help reduce risk factors.</p>
                    </div>
    
                </div>
                <p class="copyright">Heart-Care © 2021</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;