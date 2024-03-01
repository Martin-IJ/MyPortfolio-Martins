import React from "react";
import Image from "../assets/avatar2.png";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Martins <span>Ohez</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am</span>
              <TypeAnimation
                sequence={[
                  "a Developer",
                  3000,
                  "a Designer",
                  3000,
                  "an Editor",
                  3000,
                ]}
                speed={10}
                wrapper="span"
                repeat={Infinity}
                className="text-accent"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a creative-minded and multi-faced Web Developer driven to
              create awesome and functional sites with a great experiences.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <Link to="work" className="text-gradient btn-link cursor-pointer">
                My Portfolio
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://twitter.com/iceDeCoder" target="blank">
                <FaTwitter />
              </a>
              <a href="https://github.com/Martin-IJ" target="blank">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/martins-ohez-7bb7731a2"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/cm_ice/" target="blank">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
