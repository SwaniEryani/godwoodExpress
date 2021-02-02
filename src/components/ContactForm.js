import React, {useState} from 'react';
import'./ContactForm.css';

export default function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" placeholder="Your name.." id="name" required />
    </div>
    <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"  placeholder="Your Email.." id="email" required />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" placeholder="Your message.." id="message" required ></textarea>
    </div>
    <button type="submit" className="btn btn-primary">{status}</button>
</form>
  )
}
