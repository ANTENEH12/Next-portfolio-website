import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-black">
      <div className="max-w-[1240px] bg-black m-auto px-2 py-16 w-full">
        <p className=" text-blue-600 text-4xl tracking-widest uppercase">
          Contact
        </p>
        <h2 className="py-4 text-white text-4xl capitalize">
          {" "}
          let's get in touch
        </h2>
        <div className="grid bg-black lg:grid-cols-5 gap-8">
          {/* left */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue-600 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/icons/unsplash.jpg"
                  alt=""
                  width="285"
                  height="85"
                />
              </div>
              <div className="text-white">
                <h2 className="py-3 capitalize">Name Here</h2>
                <p className="py-2 capitalize">full-stack developer</p>
                <p className="p-4">
                  I am availebele for a full time position. Contact me and let's
                  talk.
                </p>
              </div>

              <div className="text-white">
                <p className="pt-8 uppercase py-6 text-blue-600">
                  contact me with
                </p>
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
          </div>

          {/* right */}
          <div className="col-span-3 bg-black  w-full h-auto shadow-xl shadow-blue-600 rounded-xl lg:p-4">
            <div className="p-4 ">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm text-white uppercase py-5">
                      name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-600"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-white uppercase py-5">
                      phone number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-600"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm text-white uppercase py-5">
                    email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-blue-600"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm text-white uppercase py-5">
                    subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-blue-600"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm text-white uppercase py-5">
                    message
                  </label>
                  <textarea
                    rows="10"
                    className="border-2 rounded-lg p-3 flex border-blue-600"
                    type="email"
                    name=""
                    id=""
                  ></textarea>
                </div>
               <button className=" p-4 uppercase w-full mt-4 bg-blue-500 rounded-full" type="submit">send message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex bg-black justify-center py-12 text-blue-600">
            <Link href='/' >
                <div className="rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                    <HiOutlineChevronDoubleUp size={30} className />
                </div>
                
            </Link>
        </div>
        <div className="text-blue-600 text-center bg-black capitalize items-center justify-center">
           <h1>© copyright anteneh tassew 2022</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
