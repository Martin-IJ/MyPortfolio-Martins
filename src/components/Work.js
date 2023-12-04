import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/travelSite.png";
import { projects } from "./db";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="lg:space-y-10">
          <div className="lg:flex gap-10 space-y-16 lg:space-y-0 mb-10 lg:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-[50%]"
            >
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                These are some of my works (best work actually). I'm open to
                jump on new ideas, jobs or contract for indivuals or company.
                Shoot me an email below let's get started!
              </p>
              <button
                onClick={() => window.open("https://github.com/Martin-IJ")}
                className="btn btn-sm"
              >
                View all project
              </button>
            </motion.div>
            {/* image */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => window.open("https://travels-site.vercel.app/")}
              className="group relative overflow-hidden lg:w-[50%] border-2 border-white/50 rounded-xl cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 h-[100%] transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* image */}
            {projects.map((project) => {
              const { id, title, description, image, link } = project;
              return (
                <motion.div
                  variants={fadeIn("", 0.2)}
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
                  <div className="absolute -bottom-full left-12 group-hover:top-5 lg:group-hover:top-12 transition-all duration-500 z-40">
                    <span className="text-gradient">{title}</span>
                  </div>
                  {/* description */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-5 lg:group-hover:bottom-14 transition-all duration-700 z-40">
                    <span className="text-2xl text-white">{description}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
