import React from 'react'
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import img1 from "../assets/work1.png";
import img4 from "../assets/morros.png";
import img5 from "../assets/tuotown.png";
import img6 from "../assets/attor.png";
import img7 from "../assets/calculator.png";
import img8 from "../assets/hotelo.png";
import img9 from "../assets/alex.png";
import img10 from "../assets/work4.png";

export default function Projects() {
  return (
    <div className="w-[100%] min-h-screen flex justify-center lg:mt-[-8.3%] lg:flex-row">
      <div className=" w-[80%] justify-center pb-10 gap-8 flex-wrap flex">
        <motion.a
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://tuotown-uz.vercel.app/"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img4} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">
              Front End
            </span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">Morros Training</span>
          </div>
        </motion.a>
        <motion.a
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://morros-uz.vercel.app/"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img5} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">
              Front End
            </span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">TuoTown</span>
          </div>
        </motion.a>
        <motion.a
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://mansurxon5.github.io/Attorneyster-JavaScript-Proctise-Web-Site/"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img6} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">
              UI/UX Design
            </span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">Attorneyster</span>
          </div>
        </motion.a>

        <motion.a
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://variteks-nghevuykz-mansurxon5.vercel.app/"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img10} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">
              Front End
            </span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">Ferkon Uz</span>
          </div>
        </motion.a>
        <motion.a
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://mansurxon5.github.io/Hotelo-Full-Web-Site/"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img8} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">
              Front End
            </span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">Hotelo</span>
          </div>
        </motion.a>
        <motion.a
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="Mansurxon5.github.io/Alex-Smith"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img9} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">
              UI/UX Design
            </span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">Alex Smith</span>
          </div>
        </motion.a>
        <motion.a
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://mansurxon5.github.io/Calculator/"
          target="_blank"
          className="group flex w-[566px] relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          <img src={img7} alt="" />
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-16 transition-all duration-500 z-50">
            <span className="text-gradient text-3xl lg:text-4xl">Mentor</span>
          </div>
          <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-[30px] transition-all duration-700 z-50">
            <span className="text-xl text-white">Calculator</span>
          </div>
        </motion.a>
        <motion.a
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          href="https://variteks-nghevuykz-mansurxon5.vercel.app/"
          target="_blank"
          className="group flex w-[566px] cursor-pointer relative overflow-hidden border-2 border-white/50 rounded-xl"
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
        </motion.a>
      </div>
    </div>
  );
}
