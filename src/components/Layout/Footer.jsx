import React from "react";
import "../../styles/mainPageStyles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-block">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact">
            <h2>Contact</h2>
            <span>Street: Shmidta 23-38</span>
            <span>Belarus Mogilev</span>
            <span>Index: 212027</span>
            <span>Phone Number: 48-17-23</span>
            <span>Mobile Number: +375(33)929-29-53</span>
          </div>
          <div className="footer-menu">
            <h2>Menu</h2>
            <nav>
              <a href="#top">To the Top</a>
            </nav>
            <a href="#top">To the News</a>
            <a href="#top">About Shop</a>
            <a href="#top">Events</a>
          </div>
          <div className="our-partners">
            <h2>Our Partnerts</h2>
            <a href="#top">Tiny myths</a>
            <a href="#top">Superior Ogre</a>
            <a href="#top">Gaga Game Shop</a>
          </div>
          <div className="footer-email">
            <h2>Contact Us</h2>
            <div className="ui action input">
              <input type="text" placeholder="e-mail" />
              <button className="ui button">Sign In</button>
            </div>
          </div>
        </div>
        <div className="footer-origin">Created 30.11.2021</div>
      </div>
    </footer>
  );
};
