import React from "react";
import { project } from "../constants/index";
import { motion } from "framer-motion";
import Card from "./Card";
import { fadeIn } from "../utils/motion";
function ProjectList() {
  const data = project;
  console.log(data.length);
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {data.length > 0
        ? data.map((value, index) => {
            return (
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                // viewport={{once: true}}
                variants={fadeIn("right", "spring",(0.2*(index%3)),0.7)}
                className="basis-1/3 my-10"
                key={index}
              >
                <Card name={value.name} href={value.href} img={value.img} ></Card>
              </motion.div>
            );
          })
        : null}
    </div>
  );
}

export default ProjectList;
