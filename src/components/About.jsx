import React from "react";

import CountUp from "react-countup";
import image3 from "../assets/image.jpg";
//intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex my-6 gap-8 lg:gap-x-20 lg:gap-y-0  gap-y-10 lg:flex-row flex-col-reverse lg:items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" static lg:w-[500px] max-w-full  "
          >
            <img
              src={image3}
              className="rounded-lg lg:rounded-full lg:w-[420px] w-[500px] h-[430px] object-cover"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4 text-lg">
              I'm a Freelance and Mentor Front-end Developer with over 3 years
              of experience.
            </h3>
            <p className="mb-6 text-sm">
              Over the years, I think I've had the best results on freelancing
              networks.com and linked.com, that's what I think. In addition,
              2022 is the last month of the industry. I started working at
              Acadeda Zed ITmy where I served as a senior destination guide for
              the city.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={1} end={6} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
