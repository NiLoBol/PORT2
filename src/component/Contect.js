import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import H1 from "./H1";
function Contect() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_c37sm59", // paste your ServiceID here (you'll get one when your service is created).
        "template_owx3zvq", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Jay", // put your name here.
          from_email: form.email,
          to_email: "sathaporn733@gmail.com", //put your email here.
          message: form.message,
        },
        "A_tPVZm-ItSViB5gc" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      animate={{}}
      className="min-w-full min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 hover:to-purple-600  hover:via-blue-600  text-white text-center "
    >
      <H1 className={styles.sectionHeadText + " text-white  pt-5"}>Contact</H1>
      <div className=" flex flex-row flex-wrap justify-around mt-10">
        <div className="basis-full relative top-0">
          <a href="https://www.facebook.com/profile.php?id=100002073303565" className="absolute xl:top-[-120px] top-[-70px] right-20 xl:right-32">
            <i class="fa-brands fa-facebook fa-bounce hover:text-cyan-200 fa-2xl"></i>
          </a>
          <a href="https://github.com/NiLoBol" className="absolute xl:top-[-120px] top-[-70px] right-10 xl:right-20">
            <i class="fa-brands fa-github fa-bounce hover:text-cyan-200 fa-2xl"></i>
          </a>
        </div>

        <div className="lg:basis-1/2  sm:basis-2/3 basis-full  ">
          <motion.div
            whileInView={"show"}
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75]  p-8 rounded-2xl  sm:backdrop-blur-sm sm:bg-white/20 mb-10"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className=" flex flex-col gap-6 font-poppins"
            >
              <label className="flex flex-col">
                <span className="text-white font-semibold mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white py-4 px-6
              placeholder:text-taupe
              text-black rounded-lg outline-none
              border-none font-semibold"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-semibold mb-4">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-white py-4 px-6
              placeholder:text-taupe
              text-black rounded-lg outline-none
              border-none font-semibold"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-semibold mb-4">
                  Your Message
                </span>
                <textarea
                  rows="3"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your message?"
                  className="bg-white py-4 px-6
              placeholder:text-taupe
              text-black rounded-lg outline-none
              border-none font-semibold resize-none"
                />
              </label>

              <button
                type="submit"
                className="flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-semibold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-white 
           hover:text-eerieBlack 
            hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500
            "
                onMouseOver={() => {
                  document
                    .querySelector(".contact-btn")
                    .setAttribute("src", sendHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector(".contact-btn")
                    .setAttribute("src", send);
                }}
              >
                {loading ? "Sending" : "Send"}
                <img
                  src={send}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contect;
