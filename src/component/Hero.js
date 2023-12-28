import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { data, navLinks } from "../constants";
import { shaq, bwmap, worldmap } from "../assets";
import BG from "../assets/backgrounds/BG.png";
import { slideIn } from "../utils/motion";
import H1 from "./H1";
const Hero = () => {
  return (
    <>
      <div className="absolute top-0 right-0 z-0 h-[100vh] w-full">
        <img
          src={BG}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>

      <section className="flex flex-col w-full h-screen mx-auto overflow-hidden">
        <div
          className={`relative inset-0 top-[100px]
           me-[320px] ms-52 flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="mt-[120px]">
            <div className="w-[600px] mb-10">
              <H1 >Frontend Developer</H1>
            </div>
            <h1
              className={`${styles.heroHeadText}  uppercase w-[600px] text-center `}
            >
              <H1 fade="right" className="x">Hi, I'm</H1>
              <H1 fade="up" className="x">{data.name.eng}</H1>
            </h1>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn("right", "spring", 0, 0.8)}
          >
            <img
              src={shaq}
              alt=""
              className="sm:h-[90vh] md:h-[70vh] xl:h-[70vh]"
            />
          </motion.div>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
      </section>
    </>
  );
};

export default Hero;
