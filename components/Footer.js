import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="h-1/2 w-full flex md:flex-row flex-col p-20 justify-center text-center   ">
        <ul>
          <p className="text-white font-bold text-3xl pb-6">Akademy</p>
          <div className="flex gap-6 pb-5 justify-center">
            <FaInstagram className="text-2xl cursor-pointer text-white hover:text-yellow-200" />
            <FaGithub className="text-2xl cursor-pointer text-white hover:text-black" />
            <FaLinkedin className="text-2xl cursor-pointer text-white hover:text-blue-600" />
            <FaYoutube className="text-2xl cursor-pointer text-white hover:text-red-600" />
          </div>
          <p className="text-white font-bold text-3xl pb-6 ">
            Copyright © 2022 Akademy
          </p>
        </ul>
      </div>
    </>
  );
}
