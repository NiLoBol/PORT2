import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
function H1(props) {
  let fade =props.fade||"down"
  return (
    <motion.div
      id={props.id}
      initial={"hidden"}
      whileInView={"show"}
      whileHover={{
        scale: 1.2,
        textShadow: "3px 1px #000",
      }}
      variants={fadeIn(fade, "spring", 0, 1)}
    >
      <h2
        className={`text-center font-bold my-2 xl:my-3 hover:text-cyan-400 ${props.className ? props.className : "text-4xl"}`}

      >
        {props.children}
      </h2>
    </motion.div>
  );
}

export default H1;
