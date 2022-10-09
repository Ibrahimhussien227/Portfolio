import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiTelegramLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gn61j6m",
      "template_uidjqlh",
      form.current,
      "rZQoisizqTJjXcra6"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ibrahimhussien@gmail.com</h5>
            <a
              href="mailto:ibrahimhussien@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiTelegramLine className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>ibrahimhussien2277</h5>
            <a
              href="https://t.me/ibrahimhussien2277"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+7 9053752552</h5>
            <a
              href="https://api.whatsapp.com/send?phone=79053752552"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submut" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
