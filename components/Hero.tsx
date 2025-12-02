'use client';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { socialMedia } from '@/data';

const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1kURawMZWZHkINY_0O3cAAOFob4MJB54W/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pb-20 pt-36 relative" id="home">
      {/* <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <Image
            src="/20240908_103451.jpg"
            alt="profile"
            width={250}
            height={250}
            className="w-45 h-45 rounded-full"
          />
          <TextGenerateEffect
            words="Hi! I'm Krishnadev S S, Software Developer based in India."
            className="text-center md:text-left text-[30px] md:text-6xl lg:text-5xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center relative my-20 z-10 space-y-6">
        <div className="flex items-center md:gap-3 gap-6 mb-6">
          {socialMedia.map((info) => (
            <a href={info.link} key={info.id} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <MagicButton
            title="Download Resume"
            icon={<GoDownload />}
            position="right"
            handleClick={handleDownload}
            otherClasses="text-lg"
          />
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
