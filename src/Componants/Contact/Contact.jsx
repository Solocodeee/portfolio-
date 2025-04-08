import "./Contact.css";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // إنشاء رابط mailto مع بيانات النموذج
    const mailtoLink = `mailto:mostafa.ashmawy002@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;

    // فتح تطبيق البريد الإلكتروني لكتابة الرسالة
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact-form" className="container mt-5 pb-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label border-0"></label>
          <input
            type="text"
            className="form-control text-white border-0"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            className="form-control border-0"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label"></label>
          <input
            type="text"
            className="form-control border-0"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label"></label>
          <textarea
            className="form-control border-0"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );

}
export default Contact;
