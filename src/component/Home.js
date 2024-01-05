import { motion } from "framer-motion";
import React from "react";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";
import H1 from "./H1";
import P1 from "./P1";
import H2 from "./H2";
import { skills, data, project } from "../constants";
import ProjectList from "./ProjectList";
import Skills from "./Skills";
import About from "./About";
import { useSelector, useDispatch } from "react-redux";
import { toggleNext } from "../redux/counterSlice";
import Experience from "./Experience";
import Contect from "./Contect";
import { styles } from "../styles";
function Home() {
  const next = useSelector((state) => state.counter.next);

  // หน้าแรก
  // เกียวกับฉัน
  // สกิล
  // โปรเจค
  // ประสบการณ์
  // ติดต่อ

  return (
    <div className="">
      <About />
      <Skills />
      <motion.div
        animate={next ? { left: 0 } : { left: "100vw" }}
        className="fixed top-0 right-full h-screen w-screen bg-white z-10"
      ></motion.div>

      <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 mt-10">
        <div className="mx-24 container mx-auto justify-center ">
          <H1 id="project" className={styles.sectionHeadText + " mb-20 pt-5"}>
            My Project
          </H1>
          <ProjectList
            data={project.filter((item) => item.RECOMMEND === true)}
            next={"next"}
            icon={"fa-solid fa-arrow-right"}
            anime={"right"}
            nexthref={"/portfolio"}
          />
        </div>
      </div>

      <Experience></Experience>
      <Contect></Contect>
    </div>
  );
}

export default Home;
