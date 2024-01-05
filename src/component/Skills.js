import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import H1 from "./H1";
import { styles } from "../styles";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      whileHover={{ scale: 1.2 }}
      variants={fadeIn("right", "spring", 0.25 * index, 0.35)}
      className="p-[1px] mx-[10px] my-[10px] basis-1/3 sm:basis-1/5 xl:p-[1px] rounded-[20px]  xl:mx-[30px] xl:my-[20px]"
      // data-tooltip-target="tooltip-default"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black rounded-[20px] py-2 px-2 xl:py-5 xl:px-12 
        min-h-[50px] flex justify-evenly items-center flex-col "
      >
        <img src={icon} alt="" className=" w-[75px] xl:w-[100px]" />

        {/* <div
            id="tooltip-default"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip content
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div> */}
      </div>
    </motion.div>
  );
};
function Skills() {
  return (
    <div className="mx-24 container mx-auto mt-24 ">
      <div className="flex justify-center">
        <H1 className={styles.sectionHeadText }>Web Developer Skills</H1>
        
      </div>
      <div className="mt-5 xl:mt-20 flex flex-wrap justify-center min-h-[250px] xl:min-h-[500px] xl:min-h-0">
        {skills.map((skills, index) => (
          <ServiceCard title={skills.name} icon={skills.icon} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
