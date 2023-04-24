import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//images
import img1 from "../assets/work1.png";
import img2 from "../assets/work2.png";
import img3 from "../assets/work3.png";




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
            className="flex-1 flex flex-col gap-y-12  mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 mb-8 leading-tight text-accent">
                My Latest Work
              </h2>
              <p className="max-w-md mb-8">
                I have 2 years of experience in web programming. You can easily
                view most of the projects I've done during this time below. I
                hope you enjoy these projects!
              </p>
              <a
                href="https://github.com/Mansurxon5"
                className="cursor-pointer btn btn-sm py-3"
              >
                My GitHub projects
              </a>
            </div>
            <a
              href="https://uzbek-women.vercel.app/"
              className="group lg:mt-[5px] relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img src={img2} alt="" />
              <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl lg:text-4xl">
                  Mentor
                </span>
              </div>
              <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
                <span className="text-xl text-white">O'zbegim Ayollari</span>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-8"
          >
            <a
              href="https://variteks-nghevuykz-mansurxon5.vercel.app/"
              target="_blank"
              className="group cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img src={img1} alt="" />
              <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl lg:text-4xl">
                  Front End
                </span>
              </div>
              <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
                <span className="text-xl text-white">Variteks Uz</span>
              </div>
            </a>
            <a
              href="https://game-boom.netlify.app"
              target="_blank"
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img src={img3} alt="" />
              <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl lg:text-4xl">
                  Mentor
                </span>
              </div>
              <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
                <span className="text-xl text-white">Game Boom</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
