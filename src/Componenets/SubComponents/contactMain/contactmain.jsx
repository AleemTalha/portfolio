import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {customAlert } from "../../../../main"
import "./contactmain.css";

const ContactMain = () => {
  // customAlert("Hello", "There");
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully!", result.text);
          customAlert("Message sent successfully! ✅", "Message Sent");
          e.target.reset();
        },
        (error) => {
          console.error("❌ Error sending email:", error.text);
          customAlert("Failed to send message. ❌", "Error in sending message");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-main pt-5 mt-5 row mx-0 px-0 g-0 text-light">
      <div className="col-12 text-center display-1 p-lg-5">Get In Touch</div>

      <div className="col-lg-4 m-0 d-flex flex-column align-items-center text-center p-4  rounded">
        <div className="contact-img-container mb-3 overflow-hidden">
          <img
            src="/imgs/Aleem.jpg"
            className="w-100 laptop-img"
            alt="Aleem Talha"
          />
        </div>
        <h2 className="fw-bold">Aleem Talha</h2>
        <p className="">Mern-Stack Developer | React Enthusiast</p>
        <div className="mt-3">
          <p className="m-0 p-0">
            <i className="bi bi-envelope-fill"></i> aleemtalha.dev098@gmail.com
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Lahore, Pakistan
          </p>
          <p>
            I am available for full-time positions. Contact me to discuss
            opportunities.
          </p>
          <div className="d-flex gap-3 justify-content-center mt-3">
            <a
              href={import.meta.env.VITE_WHATSAPP_LINK}
              target="_blank"
              className=""
            >
              <i className="text-light fs-3 bi bi-whatsapp"></i>
            </a>
            <a
              href={import.meta.env.VITE_LINKEDIN_LINK}
              target="_blank"
              className=""
            >
              <i className="text-light fs-3 bi bi-linkedin"></i>
            </a>
            <a
              href={import.meta.env.VITE_FACEBOOK_LINK}
              target="_blank"
              className=""
            >
              <i className="text-light fs-3 bi bi-facebook"></i>
            </a>
            <a
              href={import.meta.env.VITE_GITHUB_LINK}
              target="_blank"
              className=""
            >
              <i className="text-light fs-3 bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8 p-0 g-0">
        <div className="container-fluid p-4 d-flex justify-content-center flex-column rounded-2 h-100 w-100">
          <h3 className="mb-4 text-center  display-6 pt-4">Contact Me</h3>
          <form ref={form} onSubmit={sendEmail} className="px-3">
            <div className="row">
              <div className="mb-3 col-lg-6">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3 col-lg-6">
                <input
                  type="tel"
                  name="user_phone"
                  className="form-control"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="user_email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="user_website"
                className="form-control"
                placeholder="Your Website (Optional)"
              />
            </div>
            <div className="container d-flex justify-content-center">
              <button
                type="submit"
                className="rounded-5 py-2 px-4"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
