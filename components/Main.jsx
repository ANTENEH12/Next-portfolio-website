import React from "react";
import { motion } from "framer-motion"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <motion.div
  

    
    id="home" className="w-full h-screen text-center bg-black">
      <div className="max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="capitalize text-sm tracking-widest py-4 text-gray-600">
            let's build fully responsive users freindly websites using the best technologies like </p>

          <p className="text-sm uppercase tracking-widest text-gray-600">javascript|| node.js || react.js || Next.js...</p>
          <h1 className="text-gray-700 font-bold py-4">
            {" "}
            Hi, my name is{" "}
            <span className="text-blue-800 uppercase font-bold">
            {" "}
              anteneh Tassew. {" "}
            </span> 
            open-minded person.
          </h1>

          <h1 className="text-red-700 font-bold py-4 capitalize">
            i'm a full-stack web developer
          </h1>
          <p className="py-4 text-gray-600 capitalize max-w-[70%] m-auto">
          I’m focused on building responsive front-end web applications
            integrating back-end technologies.</p> 
            <p className="py-4 text-gray-600  max-w-[70%] m-auto">
              For more detail imformatin about me please visite my
            Linkedin and/or Github links below</p> 
          
          <div className="flex p-4 items-center justify-between">
            <a href="https://www.linkedin.com/in/anteneh-tassew/">
              <div className="rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                <FaLinkedinIn className="text-blue-900" />
              </div>
            </a>
            <a href="https://github.com/ANTENEH12">
              <div className="rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                <FaGithub className="text-blue-900" />
              </div>
            </a>

            <a href="http://google.com">
              <div className="rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                <AiOutlineMail className="text-blue-900" />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <BsPersonLinesFill className="text-blue-900" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
