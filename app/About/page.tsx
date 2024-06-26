"use client"
//From New Branch//

import React, { useState } from "react";
import { Margarine } from "next/font/google";
import Head from "next/head";


const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (  
    <div className="flex justify-center bg-white flex-col items-center">
      <div  className="w-full max-w-md p-2 space-y-2">
      <button className="absolute top-8 left-12"
      onClick={toggleDropdown} >

          <img src="/images/bars.png" alt="bars" className="w-10 h-8 mr-2"/>
          
    </button> 
    {isOpen && (
        <div className="absolute  top-12 left-12 shadow bg-gray-300 ">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><b>Welcome to Weeho</b></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="https://www.weeho.in/"><u>Visit Weeho</u></a></li>
          </ul>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><b>Performers</b></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mandeep Singh</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rupali Bhattacharjee</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Naviin Gandharv</li>
          </ul>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><b>Programs</b></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Friends Party</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Family Parties</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Family Get-together</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">And many More</li>
          </ul>
        </div>
    )}
    <div className="">
      <button  className="bg-orange-500 hover:bg-orange-700 text-white py-2 mt-16 lg:md:mt-0 rounded-full px-4 absolute top-20 right-12">Book an Event<link href="/login"></link></button> 
      </div>
      <div className="p-6 mt-8">
        <div className="flex justify-center py-8">
          <img
            src="/images/Weeho.png"
            alt="Company Logo"
            loading="lazy"
            width={130}
            height={50}
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/images/about.jpeg"
            alt="Intro"
            loading="lazy"
            width={130}
            height={15}
          />
        </div>
        <div className="flex justify-center items-start ">
        <p className="text-black text-center  text-lg ">
          We organize versatile events to avail experience of uniqueness, innovation and bring joyful time that create lifelong memorable memories. 
          Give your live events, product launches, seminars, conferences and annual meetups a new horizon to explore 
          the web-based platforms to connect dozens to thousands of attendees from across the globe and use interactive and immersive
          engagement platforms. Our sole mission is aiming towards bringing your vision into reality and creating over-lasting 
          memories of the remarkable event.
        </p>
        </div>

      </div>
    </div>
    {/* <div className="">
    <div className="logo flex justify-between items-center absolute bottom-4 flex-row mt-[200px] ">
      <a href="https://www.facebook.com/weehoevents">
        <img src="images/facebook1.jpeg" alt="Facebook" width={44} height={65}/>
      </a>
      <a href="https://www.instagram.com/weeho_events/">
        <img src="images/instagram.jpeg" alt="Instagram" width={44} height={46}/>
      </a>
      <a href="https://twitter.com/Weeho_Momentsgi">
        <img src="images/twitter.jpeg" alt="Twitter" width={44} height={46}/>
      </a>
      <a href="https://www.linkedin.com/in/weehoevents/">
        <img src="images/linkedin.png" alt="Linkedin" width={44} height={46}/>
      </a>
    </div>
    </div> */}
    <div className=" relative flex flex-row justify-center items-center  ">
    <a href="https://www.facebook.com/weehoevents">
        <img src="images/facebook1.jpeg" alt="Facebook" width={44} height={46}/>
      </a>
      <a href="https://www.instagram.com/weeho_events/">
        <img src="images/instagram.jpeg" alt="Instagram" width={44} height={46}/>
      </a>
      <a href="https://twitter.com/Weeho_Momentsgi">
        <img src="images/twitter.jpeg" alt="Twitter" width={44} height={46}/>
      </a>
      <a href="https://www.linkedin.com/in/weehoevents/">
        <img src="images/linkedin.png" alt="Linkedin" width={44} height={46}/>
      </a>
    </div>

    </div>
  );
};

export default About;
