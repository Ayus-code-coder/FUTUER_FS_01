import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/xgvydwke"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="c-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
