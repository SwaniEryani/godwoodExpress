import React from 'react';
import'./ContactForm.css';
//https://blog.mailtrap.io/react-contact-form/
export default function ContactForm() {

  return (
    <form id="contact-form" method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" placeholder="Your name.." />
    </div>
    <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"  placeholder="Your Email.."/>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" placeholder="Your message.." ></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
