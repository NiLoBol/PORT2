import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { data, navLinks } from "../constants";
import { shaq, bwmap, worldmap } from "../assets";
import BG from "../assets/backgrounds/BG.png";
import { slideIn } from "../utils/motion";
import H1 from "./H1";
import { useSelector } from "react-redux";
const Hero = () => {
  const mobile =useSelector((state) => state.counter.mobile)
  console.log(mobile);
  return (
    mobile?(<div className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 h-screen">
          <motion.div
            initial={{opacity: 1 , filter: "blur(50px)",transition: { ease: "easeIn", duration: 1 }}}
            
            whileInView={{opacity: 1 ,filter: "blur(0px)",transition: { ease: "easeIn", duration: 1}}}
            className="flex justify-center pt-10 heartbeat"
          >
            <img
              src={shaq}
              alt=""
              className=" w-44 h-44 object-cover border-cyan-900 border-2  object-top rounded-[50%]"
            />
          </motion.div>

          <div className="xl:mt-[120px] xl:w-[600px] sm:w-[300px] w-full min-h-[300px] flex flex-col items-center">
            <div className="xl:w-[600px] sm:w-[300px] w-full  mt-10 xl:mt-0 xl:mb-10">
              <H1 fade="right" className="text-4xl">Frontend Developer</H1>
            </div>
            <h1
              className={`${styles.heroHeadText}  uppercase xl:w-[600px] sm:w-[300px] text-center `}
            >
              <H1 fade="left" className="text-5xl leading-[100px]">Hi, I'm</H1>
              <H1 fade="up" className="text-5xl leading-[100px]" >{data.name.eng}</H1>
            </h1>
          </div>
          

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
    
    </div>):(<>
      <div className="absolute top-0 right-0 z-0 lg:h-[100vh] w-full">
        <img
          src={BG}
          alt="world map"
          className="w-full sm:h-auto lg:h-full sm:block hidden object-cover"
        />
      </div>

      <section className="flex flex-col w-full sm:min-h-[500px] lg:min-h-[700px] xl:min-h-screen mx-auto overflow-hidden">
        <div
          className={`relative inset-0 xl:top-[100px] lg:top-[150px] sm:top-[120px]
           xl:me-[320px] xl:ms-52 lg:me-[180px] lg:ms-28 sm:me-[120px] sm:ms-16 flex sm:flex-row  items-start
           sm:justify-between gap-3`}
        >
          <div className="xl:mt-[120px] xl:w-[600px] sm:w-[300px] w-full min-h-[300px] flex flex-col items-center">
            <div className="xl:w-[600px] sm:w-[300px] w-full  mt-10 xl:mt-0 xl:mb-10">
              <H1  className="xl:text-4xl lg:text-3xl sm:text-2xl">Frontend Developer</H1>
            </div>
            <h1
              className={`${styles.heroHeadText}  uppercase xl:w-[600px] sm:w-[300px] text-center `}
            >
              <H1 fade="right" className="x">Hi, I'm</H1>
              <H1 fade="up" className="x" >{data.name.eng}</H1>
            </h1>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn("right", "spring", 0, 0.8)}
            className=""
          >
            <img
              src={shaq}
              alt=""
              className="sm:h-[280px] lg:h-[50vh] xl:h-[70vh] object-contain "
            />
          </motion.div>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
      </section>
    </>)
    
    
  );
};

export default Hero;
