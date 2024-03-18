import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { data } from "../constants";
import { slideIn, slideIno } from "../utils/motion";
import { netlify } from "../assets";
import { useSelector } from "react-redux";
import { styles } from "../styles";
function Card(props) {
  const name = props.name;
  const href = props.href;
  const img = props.img;
  const text = props.text;
  const github = props.github;
  const ref = useRef(null);
  const refchildren = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const parentref = useRef(null);
  const type = props.type;
  console.log(type);
  // const mobile = useSelector((state) => state.counter.moblie);
  let Hcard = 203;

  useEffect(() => {
    const height = ref.current.getBoundingClientRect().height + Hcard;
    refchildren.current.style.bottom = `${height}px`;
    parentref.current.style.height = `${height}px`;
    refchildren.current.style.height = `${height}px`;
    // console.log(
    //   parentref.current.style.height +
    //     " " +
    //     refchildren.current.style.height +
    //     "  " +
    //     height
    // );
  }, [ref]);

  return (
    <div ref={parentref} className="sm:min-h-[150px] ">
      <motion.div class="sm:max-w-sm max-w-[300px]  bg-white border border-gray-200 rounded-lg  shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a className="flex h-[200px]  ">
          <img class="rounded-t-lg h-[200px]  object-cover" src={img} alt="" />
        </a>
        <div class="p-5" ref={ref}>
          <a>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {text}
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={refchildren}
        whileHover={{ opacity: 1 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        className={`sm:max-w-sm max-w-[300px]  bg-[#000000dd]  rounded-lg shadow-2xl   dark:bg-gray-800 dark:border-gray-700 z-10 relative `}
      >
        <motion.div
          whileHover="show"
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="flex flex-row flex-wrap items-center justify-center content-center gap-[30px] w-full h-full z-10 relative"
        >
          <div className="basis-full flex flex-row flex-wrap items-center justify-center content-center gap-[30px] ">
              {github ? (
            <motion.a
              variants={slideIno("left", "spring", 0, 0.8)}
              type="button"
              class=" bg-[#ffffff] hover:bg-[#f0f0f0]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              href={github}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              Github
            </motion.a>
          ) : null}

          {href ? (
            <motion.a
              variants={slideIno("right", "spring", 0, 0.8)}
              class=" bg-[#ffffff] hover:bg-[#f0f0f0]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              href={href}
            >
              <img src={data.netlify} className="w-[20px] h-[20px] mx-2" />
              netlify
            </motion.a>
          ) : null}
          </div>
        
          {type.map((item) => {
            return (
              <motion.a
                variants={slideIno("left", "spring", 0, 0.8)}
                type="button"
                class={item==="CSS"?styles.CSS:item==="HTML"?styles.HTML:item==="JAVASCRIPT"?styles.JavaScript:item==="API"?styles.API:item==="NEXTJS"?styles.NEXTJS:item==="MONGO DB"?styles.MongoDB:styles.CSS}
              >
                {item}
              </motion.a>
            );
          })}
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Card;
