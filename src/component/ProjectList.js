import React, { useEffect } from "react";
import { project } from "../constants/index";
import { motion } from "framer-motion";
import Card from "./Card";
import { fadeIn, slideIn, slideout } from "../utils/motion";
import { useSelector, useDispatch } from "react-redux";
import { selectNext, toggleNext } from "../redux/counterSlice";
import { Link } from "react-router-dom";
function ProjectList(props) {
  const next = useSelector((state)=>state.counter.next);
  const dispatch = useDispatch();
  const anime = props.anime;
 
  const handleNextClick = () => {
      dispatch(toggleNext());
      console.log(next);
      setTimeout(() => {
        window.location.href = props.nexthref;
    }, 500);
  };
  const data = props.data;
  const addMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
      x:
        anime === "right"
          ? [-150, -50]
          : anime === "left"
          ? [0, -100]
          : 0,
    },
  };
  const addMotionre = {
    hover: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    rest: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
      x: [0, 50],
    },
  };
  return (
    <motion.div 
    animate={next?"hidden":"show"}
    variants={slideout(anime, "spring", 0, 0.5)}
    className="flex flex-row flex-wrap justify-center gap-10">
      {data.length > 0
        ? data.map((value, index) => {
            return (
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                // viewport={{once: true}}
                variants={fadeIn("right", "spring", 0.2 * (index % 4), 0.7)}
                className=" xl:w-[280px] flex-col  my-10 hover:cursor-pointer"
                key={index}
                id={index}
              >
                {/* <div className="relative w-[100%] h-[100%] bg-black "></div> */}
                <Card
                  github={value.github}
                  name={value.name}
                  href={value.href}
                  img={value.img}
                  index={index}
                  text={value.text}
                ></Card>
              </motion.div>
            );
          })
        : null}
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        // viewport={{once: true}}
        variants={fadeIn("right", "spring", 0.2 * (data.length % 4), 0.7)}
        className=" xl:w-[280px] flex-col  my-10 hover:cursor-pointer"
        key={data.length}
        id={data.length}
      >
        {/* <div className="relative w-[100%] h-[100%] bg-black "></div> */}
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg  
        shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:bg-yellow-400 h-[200px]"
        >
          <motion.a
            onClick={handleNextClick}
            className="w-full h-full flex justify-center items-center "
            initial="rest"
            whileHover="hover"
            animate="rest"
            whileInView="rest"
          >
            <motion.h5
              variants={addMotionre}
              class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {props.next}
            </motion.h5>
            <motion.span
              className="text-9xl text-center" // Adjust the styling of the arrow
              variants={addMotion}
            >
              <i class={props.icon}></i>
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectList;
