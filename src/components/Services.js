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
      "I'm a creative-minded and multi-faced Web Developer driven to create awesome and functional sites with a great experiences.",
    link: "Learm more",
    redLink: "https://github.com/Martin-IJ",
  },
  {
    name: "Graphics Design",
    description:
      "I'm a passionate graphic designer and 3d animator. I value simplicity, symmetry and details. With my designs, I always strive for beauty and balance.",
    link: "Learm more",
    redLink: "#",
  },
  {
    name: "Video Editing",
    description:
      "I fine-tune written or spoken words turning them into visual representation (motion graphics).",
    link: "Learm more",
    redLink: "#",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex lg:items-center lg:gap-5 flex-col lg:flex-row">
          {/* text & img */}
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mix-blend-lighten mb-12 lg:mb-0"
          >
            <div className="absolute -z-10 hidden lg:flex">
              <img
                src={serviceImg}
                alt="serviceImg"
                className="h-[400px] mix-blend-lighten"
              />
            </div>
            <h2 className="h2 text-accent mb-6">What I DO</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Web Developer, Graphic Designer and Video Editor
              with over 2 years experience in total.
            </h3>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0)}
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
                      <a className="btn w-9 h-9 mb[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm">{link}</a>
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
