import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { data, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import H1 from "./H1";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-[180px] sm:w-[150px] lg:w-[200px]  card-gradient  rounded-[20px] shadow-card"
    >
      <div
        className="bg-black  rounded-[20px]  sm:py-5 sm:px-5 lg:px12 min-h-[200px] xl:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white  text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-[6rem] xs:mx-5 xl:mx-24 "
    >
      <motion.div variants={textVariant()}>
        <H1 className={styles.sectionHeadText}>Overview</H1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mx-10 text-taupe text-[18px]  leading-[30px] text-center"
      >
        {data.aboutme}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-5 ms:gap-10 container justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default About;
