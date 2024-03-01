//From New Branch//
import React from "react";
import { Margarine } from "next/font/google";
import Head from "next/head";

const About = () => {
  return (
    <div className="flex justify-center bg-white">
      <div  className="w-full max-w-md p-2 space-y-2">
      
      <button className="absolute top-8 left-12">
      <img src="/images/bars.png" alt="bars" className="w-10 h-8 mr-2"/>
      <div className="Dropdown"></div>
    </button>     
     <button  className="bg-orange-500 hover:bg-orange-700 text-white py-2 rounded-full px-4 absolute top-8 right-12">Book an Event<link href="/login"></link></button>
     
      <div className="p-6">
        <div className="flex justify-center">
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
        <div className="flex justify-center items-center mb-[150px]">
        <p className="text-black text-center text-lg font-medium ">
          We organize versatile events to avail experience of uniqueness, innovation and bring joyful time that create lifelong memorable memories. 
          Give your live events, product launches, seminars, conferences and annual meetups a new horizon to explore 
          the web-based platforms to connect dozens to thousands of attendees from across the globe and use interactive and immersive
          engagement platforms. Our sole mission is aiming towards bringing your vision into reality and creating over-lasting 
          memories of the remarkable event.
         </p>
        </div>

      </div>
    </div>
    <div className="logo flex justify-between items-center absolute bottom-4 flex-row ">
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
    </div>
  );
};

export default About;
