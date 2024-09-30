"use client";

import React from "react";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

const Landing: React.FC = () => {
  return (
    <div className="text-center w-screen h-screen">
      <header className="flex flex-row items-center justify-between gap-2 bg-[#66ff44] p-5 px-20">
      <div className="flex flex-row items-center gap-2">
      <Image
          src="/images/causekoin.png" // Updated path to images folder
          alt="Your Project Logo"
          width={70}
          height={70}
          priority
        />
        <h1 className="text-3xl font-bold ml-5">CauseKoin</h1>
        </div>
        <ConnectButton />
      </header>
      <section className="my-10 flex items-center justify-center px-20">
      <div className=" w-1/2 flex flex-col items-start justify-start text-left space-y-8">
        
        <h2 className="text-6xl font-semibold mt-5">Empower Your Community</h2>
        <p className="mt-3 text-xl text-gray-600">Join us in making a difference. Earn rewards for your contributions to the community with our social impact token.</p>
        <button className="bg-blue-500 text-white py-2 px-4 mt-5 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
        <Image 
          src="/images/causekoin.png" 
          alt="Hero Image" 
          width={400} 
          height={400} 
          className="mx-auto"
        />
      </section>
      <footer className="bg-gray-100 p-3 fixed bottom-0 w-full">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;