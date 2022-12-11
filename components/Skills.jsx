import Image from "next/image";
import React from "react";
import html from "/public/icons/html.png"
import Css from "/public/icons/css.png"
import tailwind from "/public/icons/tailwind.png"
import javascript from "/public/icons/javascript.png"
import React_logo from "/public/icons/React_logo.png"
import nextjs from "/public/icons/nextjs.png"
import github from "/public/icons/github_logo.png"
const Skills = () => {
  return (
    <div id='skill' className="w-full bg-black text-blue-900 font-bold lg:h-screen shadow-blue-600 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-4xl tracking-widest uppercase text-blue-700">
          Skills
        </p>
        <h2 className="py-4 text-xl capitalize">what i can do</h2>
        <div className="grid md:drid-cols-2 lg:grid-cols-4 gap-8">
         
         <div className="p-6 shadow-xl  shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={html}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML 5</h3>
              </div>
              </div>
          </div>
          <div className="p-6 shadow-xl  shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Css}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
              </div>
          </div>
          <div className="p-6 shadow-xl  shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwind}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
              </div>
          </div>
          <div className="p-6 shadow-xl  shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto border">
                <Image
                  src={javascript}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
              </div>
          </div>
          <div className="p-6 shadow-xl shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={React_logo}
                  width="150"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT.JS</h3>
              </div>
              </div>
          </div>
          <div className="p-6 shadow-xl  shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={nextjs}
                  width="90"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </div>
              </div>
          </div>
          <div className="p-6 shadow-xl  shadow-blue-600 rounded-xl hover:scale-110 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={github}
                  width="90"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
              </div>
          </div>
          



        </div>
      </div>
    </div>
  );
};

export default Skills;
