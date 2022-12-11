import Image from "next/image";
import Link from "next/link";
import ProjectItem from './ProjectItem';
import React from "react";
import Amazone from "/public/icons/Amazon Image 2022-.jpeg";
import ANetflix from "/public/icons/ANetflix Image 2022-.jpeg";
import Apple from "/public/icons/Apple Image 2022-.jpeg";
import AMessenger from "/public/icons/AMessenger Image 2022-.jpeg";

const Projects = () => {
  return (
    <div id="project" className="w-full bg-black text-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-4xl tracking-widest uppercase text-blue-600">
          projucts
        </p>
        <h1 className="py-4 text-4xl  capitalize">clone projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Amazon app"
            backgroundImg={Amazone}
            projectUrl="/Amazon"
          />
          <ProjectItem
            title="Netflix app"
            backgroundImg={ANetflix}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="AMessenger app"
            backgroundImg={AMessenger}
            projectUrl="/Messanger"
          />
          <ProjectItem
            title="Apple app"
            backgroundImg={Apple}
            projectUrl="/apple"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
