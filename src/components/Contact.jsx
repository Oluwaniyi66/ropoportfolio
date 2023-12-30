import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lcs698f",
      "template_7p0f8wz",
      form.current,
      "lGhpRfJNpS-EpF5BD"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Send me a mail</h5>
            <a href="mailto:oluwaniyiropo11@gmail.com" target="_blank">
              oluwaniyiropo11@gmail.com
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Oluwaniyi Ropo</h5>
            <a href="http://www.linkedin.com/in/oluwaniyiropo" target="_blank">
              Talk to me
            </a>
          </article>
          <article className="contact__option">
            <RiTwitterXLine className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@oluwaniyiropo</h5>
            <a href="https://twitter.com/oluwaniyiropo" target="_blank">
              Direct Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your emaill" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
