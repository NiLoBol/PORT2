import { motion } from "framer-motion";
import React from "react";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";
import H1 from "./H1";
import P1 from "./P1";
import H2 from "./H2";
import { skills, data } from "../constants";
import ProjectList from "./ProjectList";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      whileHover={{ scale: 1.2 }}
      variants={fadeIn("right", "spring", 0.25 * index, 0.35)}
      className="basis-1/5  p-[1px] rounded-[20px]  mx-[30px] my-[20px]"
      // data-tooltip-target="tooltip-default"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black rounded-[20px] py-5 px-12 min-h-[50] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="" className="w-[100px]" />

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
function Home() {
  return (
    <div className="mx-60">
      <h1 className="text-center font-bold text-5xl">Home</h1>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={zoomIn(0, 0.5)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
        vitae dignissimos minus eaque culpa unde tempore dolore aperiam
        obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
        veniam dolorum ipsum doloribus.
      </motion.p>
      <div className="flex flex-row  my-10">
        <div className="w-1/2 border-spacing-2  border border-black bg-blue-200 mt-4 rounded-md shadow-lg mx-5 p-5">
          <H1>Frontend Developer</H1>
          <H2> Hi i'M Jay</H2>
          {/* <P1>my name is Sathaporn Euapattana </P1> */}
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={slideIn("right", "spring", 0, 0.8)}
          className="w-1/2  mx-5 p-5"
        >
          <img src={data.img} alt="" className="w-1/2" />
        </motion.div>
      </div>
      <button
        data-tooltip-target="tooltip-default"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default tooltip
      </button>

      <div
        id="tooltip-default"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div className=" mx-5 p-5">
        <div className="flex justify-center">
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            whileHover={{
              scale: 1.2,
              borderRadius: " 20px",
              border: "1px solid #000",
            }}
            variants={fadeIn("down", "spring", 0, 1)}
          >
            <h2 className="text-center font-bold text-4xl mx-5 my-3">
              Web Developer Skills
            </h2>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-wrap">
          {skills.map((skills, index) => (
            <ServiceCard title={skills.name} icon={skills.icon} index={index} />
          ))}
        </div>

        <ProjectList></ProjectList>
      </div>
    </div>
  );
}

export default Home;
