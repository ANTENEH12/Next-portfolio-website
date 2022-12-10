import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-4 flex items-center py-16 bg-black text-white"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-4xl tracking-widest text-blue-600">
            about me
          </p>
          <h1 className="uppercase py-4">who i am</h1>
          <p className="py-2 text-gray-600">
            My name is Anteneh Tassew, I am outgoing, dedicated, team player and
            open-minded person. I get across to people and adjust to changes
            with ease. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job. I believe that a person should work on developing their
            professional skills and learning new things all the time.
          </p>

          <p className="py-2 text-gray-600">
          I build fully responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. I mostly 
            build front-end applications using HTML, CSS/Tailwinscss, Javascript,
            React.js and Next.js... 
          </p>

          <p className="py-2 text-gray-600">
            For More details about me please click my linkedin or github links
            below.
          </p>
        </div>
        <div className="w-full h-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <Image className="shadow shadow-red-600 rounded-full"
            src="/../public/icons/profil.jpeg"
            alt="/"
            width="200"
            height="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
