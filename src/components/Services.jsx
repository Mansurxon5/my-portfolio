import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//image
import image from "../assets/mun.jpg";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "Mentor",
    description:
      "I am active in providing information about learning to young people in a language they can understand...",

    link: "Learn More",
  },
  {
    name: "Freelance",
    description:
      "During these years, many freelancers work in web networks. He is a job specialist in these networks - upwork.com...",
    link: "Learn More",
  },
  {
    name: "Events and Intellect:",
    description:
      "I am an active participant in many events and competitions in my field. I am also very passionate about...",
    link: "Learn More",
  },
  {
    name: "Teamwork:",
    description:
      "I can get along quickly in teamwork. I have leadership potential in team projects.",
    link: "Learn More",
  },
];

const Services = () => (
  <section className="section" id="services">
    <div className="container mx-auto flex">
      <div className="flex lg:gap-x-[90px] flex-col lg:flex-row">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 mb-12 lg:mb-0"
        >
          <h2 className="h2 text-accent mb-4">WHAT I DO</h2>
          <h3 className="h3 max-w-[455px] mb-4">
            I'm a Freelance Front-end Developer with over 2 years of experience.
          </h3>
          <a href="https://github.com/Mansurxon5" className="btn py-3 text-lg btn-sm mb-5">
            See my work
          </a>
          <img
            src={image}
            className="max-w-full mt-12 w-[500px] h-[300px] rounded-lg object-cover"
            alt=""
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="border-b border-white h-[132px] mb-[18px] mt-0 flex "
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">
                      {service.name}
                    </h4>
                    <p className="font-secondary tracking-tight">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {service.link}
                    </a>
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

export default Services;
