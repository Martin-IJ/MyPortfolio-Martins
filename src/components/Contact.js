import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cnepgxk",
        "template_2n1q9gj",
        form.current,
        "JXBIdaYYOh5NSEiz-"
      )
      .then(
        (result) => {
          alert("Email sent successfully");
        },
        (error) => {
          alert("Error sending email");
        }
      );
    e.target.reset();
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all"
              type="email "
              placeholder="Your email"
              name="user_email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all"
              type="text "
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
