import React from "react";
import serviceImg from "../assets/services.png";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Web Development",
    description:
      "I'm a creative-minded and multi-faced Web Developer driven to create awesome and functional sites with great experience.",
    link: "Learn more",
    redLink: "https://github.com/Martin-IJ",
  },
  {
    name: "Graphics Design",
    description:
      "I'm a passionate graphic designer. I value simplicity and details. With my designs, I always strive for beauty and balance.",
    link: "Learn more",
    redLink: "#",
  },
  {
    name: "Video Editing",
    description:
      "I fine-tune written or spoken words turning them into visual representation (motion graphics).",
    link: "Learn more",
    redLink: "#",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mix-blend-lighten mb-12 lg:mb-0"
          >
            <div className="absolute -z-10 hidden lg:flex bottom-20">
              <img
                src={serviceImg}
                alt="serviceImg"
                className="h-[400px] mix-blend-lighten"
              />
            </div>
            <h2 className="h2 text-accent mb-6">What I DO</h2>
            <h3 className="leading-10 text-[26px] font-semibold max-w-[455px] mb-16">
              I'm a Freelance Web Developer, Graphic Designer and Video Editor
              with over 5 years experience in total.
            </h3>
            <Link to="/work">
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link, redLink } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div
                      onClick={() => window.open(redLink)}
                      className="flex flex-col flex-1 items-end"
                    >
                      <span className="btn w-9 h-9 mb-[42px] flex justify-center items-center cursor-pointer">
                        <BsArrowUpRight />
                      </span>
                      <p className="text-gradient text-sm cursor-pointer">
                        {link}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
