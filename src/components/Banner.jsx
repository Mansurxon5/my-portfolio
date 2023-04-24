import React from "react";
// my image
import image2 from "../assets/image2.jpg";
// icons
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:gap-x-12 gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[.8] lg:text-[60px]"
            >
              DooeX
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[70px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-3 text-white">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "YouTuber", 2000, "Gamer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto  lg:mx-0"
            >
              Assalomu Alaykum. I have 2 years project and 1 year mentoring
              experience in Front End Web Programming. In addition, I have
              practical and theoretical knowledge of Back End and I also have
              knowledge of web design.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex gap-4 max-w-max mx-auto lg:mx-0 mb-12 items-center pb-3 "
            >
              <button className="btn btn-lg">Contact me</button>
              <a
                href="https://resume.io/r/qdwNb8uZ0"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-6 pb-3 text-2xl max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.youtube.com/@mansurxon0728">
                <FaYoutube />
              </a>
              <a href="https://github.com/Mansurxon5">
                <FaGithub />
              </a>
              <a href="https://instagram.com/mansurxongiyosiddinov?igshid=ZDdkNTZiNTM=">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/GMansurxon53009">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/mansurxon-g-iyosiddinov-459373271/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="mx-auto"
          >
            <img
              src={image2}
              className="w-[400px] object-cover rounded-lg max-w-full h-[400px]"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
