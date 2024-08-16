import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xizvur",
        "template_av09skg",
        form.current,
        "hlisn0xapS8KmIlgH"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    e.target.reset();
  };
  return (
    <div id="contact" className="contact">
      <div className="right-contact">
        <form ref={form} onSubmit={sendEmail}>
          <h3>
            Let's Work <span>Together</span>
          </h3>
          <div className="inputs">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="phone"
              name="user_phone"
              placeholder="Mobile"
              required
            />
          </div>

          <input
            className="form-dta"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          <select name="user_related" id="">
            <option value="" name="user_option1">
              Related To..
            </option>

            <option value="" name="user_option2">
              Full Stack Developer
            </option>
            <option value="" name="user_option3">
              Frontend Developer
            </option>
            <option value="" name="user_option4">
              UI/UX Designer
            </option>
            <option value="" name="user_option5">
              SEO
            </option>
          </select>

          <textarea
            rows="5"
            cols="5"
            className="form-dta"
            name="message"
            placeholder="Your Messege.."
            required
          />

          <input type="submit" value="Send Message" />
        </form>
      </div>
      <div className="left-contact">
        <div className="items">
        <i className="bi bi-telephone-fill icon"></i>
          <p className="para">+91 7078063618</p>
        </div>
        <div className="items">
        <i className="bi bi-envelope-check icon"></i>

          <p className="para">raghavjatin0000@gmail.com</p>
        </div>
        <div className="items">
        <i className="bi bi-geo-alt-fill icon"></i>

          <p className="para">Pilkhuwa, Hapur, UP</p>
        </div>
      </div>

    </div>

  );
};

export default Contact;
