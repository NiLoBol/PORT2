import React from "react";
import { motion } from "framer-motion";
function Textmoves(props) {
    const textarray = props.textarray;
    console.log(textarray.length);
  return (
    <div>
      <motion.div
        whileInView="visible" //ค่าที่จะเปลี่ยนเมื่อมองเห็นใน viewport
        viewport={{ once: true }} // ทำครั้งแรกที่มองเห็นใน viewport
        transition={{ delay: textarray.length *2, duration: 0.5 }} // เวลา
        variants={{
          visible: { opacity: 0, scaleY: 0,  y: -1000 ,display:"none"},
        }} //กำหนดค่า
        className="relative min-w-full min-h-screen bg-black text-white overflow-hidden "
      >
        {textarray.length?(textarray.map((value ,index) => {
          return(<motion.h2
            viewport={{ once: true }} // ทำครั้งแรกที่มองเห็นใน viewport
            transition={{ delay:((index)*2)  ,duration: 2 }} 
            
            animate={{ x: ['-1000vw', '45vw', '45vw', '45vw', '200vw'] , scale:[1,1,2,1,1] }}
            className=" absolute top-1/2 xl:text-5xl xs:text-lg" 
          >
            {value}
          </motion.h2>)
        })):(<h1 className="text-center">textarray not working</h1>)}

      </motion.div>
    </div>
  );
}

export default Textmoves;
