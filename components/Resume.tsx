'use client';
import React from 'react';
import MagicButton from './ui/MagicButton';
import { GoDownload } from 'react-icons/go';

const Resume = () => {
    const handleDownload = () => {
        // Create a function to trigger the download process
        // For example, you can use the following code to download a file named 'resume.pdf'
        const downloadResume = () => {
          // Path to the resume file
          const resumeUrl = 'https://drive.google.com/file/d/1Qu5NhW6QNHGytwb85r8XWvjf-WrGmV6i/view?usp=sharing';
    
          // Create a new anchor element
          const link = document.createElement('a');
          link.href = resumeUrl;
          link.setAttribute('download', 'resume.pdf');
    
          // Append the anchor element to the body
          document.body.appendChild(link);
    
          // Trigger the download
          link.click();
    
          // Cleanup: remove the anchor element
          document.body.removeChild(link);
        };
    
        // Call the download function
        downloadResume();
      };
  return (
    <div className="py-20 flex flex-col items-center" id="resume">
      <h1 className="heading text-white-100 mb-4 text-center">
        Download{" "}
        <span className="text-purple">Resume</span>
      </h1>
      <div className="mb-4">
        <MagicButton
          title={"Download Resume"}
          icon={<GoDownload />}
          position="left"
          handleClick={handleDownload}
          otherClasses="!bg-[#161A31]"
        />
      </div>
    </div>
  );
}

export default Resume;
