import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/travelSite.png";
import Img2 from "../assets/img1.png";
import Img3 from "../assets/mealsApp.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="md:space-y-10">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="md:flex items-center gap-10 mb-10 lg:mb-0 space-y-10 md:space-y-0"
          >
            {/* text */}
            <div className="md:w-[50%]">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                These are some of my works (best work actually). I'm open to
                jump on new ideas, jobs or contract for individuals or company.
                Shoot me an email below let's get started!
              </p>
              <Link to="all-works">
                <button className="btn btn-sm">
                  Click to view all my projects
                </button>
              </Link>
            </div>

            {/* Burger Site */}
            <div
              onClick={() => window.open("https://martins-burger.vercel.app/")}
              className="group relative md:w-[50%] overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">Burger Site</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-2xl text-white">
                  Your goto Burger Shop 🍔
                </span>
              </div>
            </div>
          </motion.div>

          <div className="md:flex gap-10 space-y-10 md:space-y-0">
            {/* Travel Site */}
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => window.open("https://travels-site.vercel.app/")}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">Travel Site</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-2xl text-white">
                  Book your flights, hotels and holidays
                </span>
              </div>
            </motion.div>

            {/* Meal App */}
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => window.open("https://martinsmealsapp.vercel.app/")}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-inner cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">Meals App</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-2xl text-white">
                  Get good Food Suggestions and Recipes
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
