import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/travelSite.png";
import { projects } from "./db";
import { FaGithub } from "react-icons/fa6";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllWork = () => {
  return (
    <section className="" id="work">
      <div className="container mx-auto pb-10">
        <div className="md:space-y-10">
          <div className="md:flex items-center gap-10 space-y-16 md:space-y-0 mb-10 md:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="md:w-[50%]"
            >
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                These are some of my works (best work actually). I'm open to
                jump on new ideas, jobs or contract for individuals or company.
                Shoot me an email below let's get started!
              </p>
              <button
                onClick={() => window.open("https://github.com/Martin-IJ")}
                className="btn btn-sm flex items-center gap-2"
              >
                My GitHub <FaGithub />
              </button>
            </motion.div>

            {/* image */}
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => window.open("https://travels-site.vercel.app/")}
              className="group relative overflow-hidden md:w-[50%] border-2 border-white/50 rounded-xl cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pre title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">Travel Site</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 lg:group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-2xl text-white">
                  Book your flights, hotels and holidays
                </span>
              </div>
            </motion.div>
          </div>

          {/* Mapped Data - My works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* image */}
            {projects.map((project) => {
              const { id, title, description, image, link } = project;
              return (
                <motion.div
                  variants={fadeIn("", 0)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  key={id}
                  onClick={() => window.open(link)}
                  className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
                >
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={image}
                    alt=""
                  />

                  {/* title */}
                  <div className="absolute -bottom-full left-5 group-hover:top-5 lg:group-hover:top-5 transition-all duration-500 z-40">
                    <span className="text-gradient">{title}</span>
                  </div>
                  {/* description */}
                  <div className="absolute -bottom-full left-5 group-hover:bottom-5 lg:group-hover:bottom-0 transition-all duration-700 z-40">
                    <span className="text-lg text-white">{description}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to home Navbar */}
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <Link
            to="/"
            activeClass="active"
            className="cursor-pointer flex gap-1 items-center justify-center"
          >
            <div className="w-full bg-black/20  backdrop-blur-2xl rounded-full max-w-fit mx-auto p-5 flex justify-between items-center text-2xl text-white/50">
              <BiHomeAlt />
              <p>Back to Home</p>
            </div>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default AllWork;
