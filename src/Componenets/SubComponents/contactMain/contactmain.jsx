import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactmain.css";

const ContactMain = () => {
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
    <div className="contact-main pt-5 mt-5 row p-lg-5 p-md-3 p-1 m-0">
      <div className="col-12 text-center display-1 text-light p-lg-5">
        Get In Touch
      </div>

      {/* Profile Section */}
      <div className="col-lg-4 d-flex flex-column align-items-center text-center p-4 text-light rounded">
        <div className="contact-img-container mb-3">
          <img src="/imgs/Aleem.jpg" loading="lazy" className="w-100" alt="Aleem Talha" />
        </div>
        <h2 className="fw-bold">Aleem Talha</h2>
        <p className="text-light">Mern-Stack Developer | React Enthusiast</p>
        <div className="mt-3">
          <p className="m-0 p-0">
            <i className="bi bi-envelope-fill"></i> aleemtalha.dev098@gmail.com
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Lahore, Pakistan
          </p>
          <p>I am available for full-time positions. Contact me to discuss opportunities.</p>
          <div className="d-flex gap-3 justify-content-center mt-3">
            <a href="#" className="text-light">
              <i className="fs-3 bi bi-whatsapp text-light"></i>
            </a>
            <a href="#" className="text-light">
              <i className="fs-3 bi bi-linkedin text-light"></i>
            </a>
            <a href="#" className="text-light">
              <i className="fs-3 bi bi-facebook text-light"></i>
            </a>
            <a href="#" className="text-light">
              <i className="fs-3 bi bi-github text-light"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="container m-0 rounded-2 h-100 w-100">
          <h3 className="mb-4 text-center text-light display-6 pt-4">
            Contact Me
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <input
                  type="text"
                  name="user_name"
                  className="form-control bg-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3 col-lg-6">
                <input
                  type="tel"
                  name="user_phone"
                  className="form-control bg-transparent"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="user_email"
                className="form-control bg-transparent"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control bg-transparent"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control "
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="user_website"
                className="form-control bg-transparent"
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
