import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/travelSite.png";
import Img2 from "../assets/img1.png";
import Img3 from "../assets/mealsApp.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                magni possimus sit molestiae veniam omnis in nisi temporibus?
                Ratione, rerum.
              </p>
              <button onClick={()=> window.open('https://vercel.com/martin-ij')} className="btn btn-sm">View all project</button>
            </div>
            {/* image */}
            <div onClick={()=> window.open('https://travels-site.vercel.app/')} className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient">Travel Site</span></div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-2xl text-white">Book your flights, hotels and holidays</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div onClick={()=> window.open('https://martins-burger.vercel.app/')} className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient">Burger Site</span></div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-2xl text-white">Your goto Burger Shop 🍔</span>
              </div>
            </div>
            <div onClick={()=> window.open('https://martinsmealsapp.vercel.app/')} className="group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-inner cursor-pointer">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient">Meals App</span></div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-2xl text-white">Get good Food Suggestions and Recipes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
