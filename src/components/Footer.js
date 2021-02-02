import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Visit us for great deals and services
        </p>
        <p className="footer-subscription-text">
          Contact us at any time!
        </p>
        <Button buttonStyle="btn--outline">contact Us</Button>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Quick Links</h2>
            <Link to="/location">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/features">Features</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Contact</Link>
            <Link to="/location">Location</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Find us on</h2>
            <a href="https://www.instagram.com/dogwoodexpress/" >Instagram</a>
            <a href="https://www.facebook.com/dogwoodexpress" >Facebook</a>
            <a href="https://twitter.com/DogwoodExpress" >Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DOGWOOD EXPRESS
            </Link>
          </div>
          <small className="website-rights">Dogwood Express Market © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/dogwoodexpress"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/dogwoodexpress/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/DogwoodExpress"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
