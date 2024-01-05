import React from "react";
import H1 from "./H1";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

function ExperienceCard(props) {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      whileHover={{scale:1.25 ,cursor:"pointer",}}
      variants={slideIn(props.fade,"spring", 0.2,1)}
      className="border-[1px] px-5 py-10 border-gray-100 rounded-2xl shadow-xl my-10 mx-16 sm:mx-16 lg:mx-24  xl:mx-44 "
    >
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center ">{props.children}</h1>
    </motion.div>
  );
}

export default ExperienceCard;
