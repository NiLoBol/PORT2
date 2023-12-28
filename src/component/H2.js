import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function H2(props) {
  return (
    <motion.h2
      initial={"hidden"}
      whileInView={"show"}
      // viewport={{once: true}}
      variants={fadeIn("right", "spring", 0.5, 0.3)}
      class="text-3xl font-medium dark:text-white my-20"
    >
      {props.children}
    </motion.h2>
  );
}

export default H2;
