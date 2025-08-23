import './Footer.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...', formData);

    emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_PUBLIC_KEY
    )

    .then((res) => {
      console.log('Email sent:', res);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Email error:', err);
      alert('Failed to send message. Try again.');
    });
  };

  return (
    <footer className="footer" id="contacts">
      <div className="footer-container">

        <h2 className="footer-title">LET'S GET IN TOUCH</h2>

        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="input-box"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-box"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="input-box textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>

        <div className="social-icons">
          <a href="https://github.com/vince-tn"><img src="/icons/github.png" alt="GitHub" /></a>
          <a href="tel:+639763291859"><img src="/icons/phone.png" alt="Phone" /></a>
          <a href="mailto:paulvincentj.alcantara@gmail.com"><img src="/icons/email.png" alt="Email" /></a>
          <a href="https://www.facebook.com/pvaaaaaaaa"><img src="/icons/facebook.png" alt="Facebook" /></a>
        </div>

      </div>
    </footer>
  );
}
