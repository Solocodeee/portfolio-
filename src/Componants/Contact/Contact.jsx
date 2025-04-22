import "./Contact.css";
import React from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section id="contact-form" className="container mt-5 pb-5">
    <h2 className="text-center mb-4">Contact Me</h2>
    <div className="row justify-content-center">
      {/* Left side cards */}
      <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center flex-column mt-5">
        <a href="https://wa.me/+201211929157" target="_blank" className="card text-white p-3 d-flex align-items-center flex-row mb-4 w-100">
          <FaWhatsapp size={30} className="me-3 text-success" />
          <span>+20 121 192 9157</span>
        </a>
        <a href="mailto:mostafa.ashmawy002@gmail.com" className="card text-white p-3 d-flex align-items-center flex-row mb-4 w-100">
          <MdEmail size={30} className="me-3 text-danger" />
          <span>mostafa.ashmawy002@gmail.com</span>
        </a>
        <a href="https://www.facebook.com/share/1BZ3Ed8ZVX/" target="_blank" className="card text-white p-3 d-flex align-items-center flex-row mb-4 w-100">
          <FaFacebook size={30} className="me-3 text-primary" />
          <span>Facebook</span>
        </a>
        <a href="https://www.linkedin.com/in/mostafa-ashmawy-226512222

" target="_blank" className="card text-white p-3 d-flex align-items-center flex-row mb-4 w-100">
          <FaLinkedin size={30} className="me-3 text-primary" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
  
  
  );
}

export default Contact;
