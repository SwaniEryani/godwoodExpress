import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm";

export default function ContactUs() {
  return (
    <>
      <h1 className="contact_us">Contact Us</h1>
     
        
          <div class="container">
            <div className ="title">
              <h2>Contact Us</h2>
              <p>Send us your message:</p>
            </div>
            <div class="row">
              <div class="column">
                <img className="contect-img" src="images/img-13.jpg" alt=""/>
              </div>
              <div class="column">
                {/* <ContactForm /> */}
                <p>You can send us an email</p>

              <p><a href="mailto:info@dogwoodexpress.com">info@dogwoodexpress.com</a></p>
              </div>
            </div>
          </div>
      
      
    </>
  );
}
