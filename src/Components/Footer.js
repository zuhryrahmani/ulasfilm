import React from 'react';
import Assetsgplay from '../Assets-saras/sosmed/gplay.png';
import Assetsappstore from '../Assets-saras/sosmed/apple.png';
import Assetsfb from '../Assets-saras/sosmed/facebook.png';
import Assetsig from '../Assets-saras/sosmed/sosmed_instagram.png';
import Assetsgplus from '../Assets-saras/sosmed/gplus.png';


function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <h2>LOGO</h2>
                <p>Lorem Ipsummmmmmmmmmmmm hahahahah hahhaha kakakaka
                    hhhhhhhhhhhhhh jajajajajajaja ppppppppppppp
                </p>
            </div>
            <div className="footer-foot">
                    <h5>About Us</h5>
                    <h5>Blog</h5>
                    <h5>Service</h5>
                    <h5>Karir</h5>
                    <h5>Media Center</h5>
            </div>
            <div className="footer-download">
               <h4>Download</h4>
                <div className="footer-download-image">
                    <img src={Assetsgplay} alt="Google Play" className="footer-gplay"></img>
                    <img src={Assetsappstore} alt="App Store" className="footer-app"></img>
                </div>
                <h4>Social Media</h4>
                <img src={Assetsfb} alt="Facebook" className="footer-facebook"></img>
                <img src={Assetsig} alt="Instagram" className="footer-instagram"></img>
                <img src={Assetsgplus} alt="Google Plus" className="footer-gplus"></img>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        Copyright © . Team A All Rights Reserved
    </div>
</>

  );
}

export default Footer;