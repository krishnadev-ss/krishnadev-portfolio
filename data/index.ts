import { FcOrganization } from "react-icons/fc";

export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },

    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Education",
      description: "B.Tech. in Computer Science, CUSAT",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/education.png",
      spareImg: "/grid.svg",
    },
  
    {
      id: 5,
      title: "Currently learning Mobile App Development",
      description: "Flutter , Dart , React Native",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
    
    {
      id: 7,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2  md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-half",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },

    {
      id: 8,
      title: "I'm always looking for new opportunities",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-half",
      titleClassName: "justify-end",
      img: "/bg1.png",
      spareImg: "/grid.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CAMBOARD",
      des: "A vitual classroom controlled using various hand gestures. Implemented using OpenCV,MediaPipe and Tensorflow for OCR.",
      img: "/class.png",
      iconLists: ["/python.png", "/opencv.png", "/mediapipe.png", "/tensorflow.png", "/ocr.png"],
      link: "https://github.com/krishnadev-ss/virtual-classroom",
    },
    {
      id: 2,
      title: "C4CHAT-Chat App",
      des: "A chat application with a frontend using React and backend using Node.js and Socket.io. It also has a live chat feature using Socket.io.",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/chakra.png", "/ts.svg", "/node.png", "/mongodb.png", "/socket.png","/express.png"],
      link: "https://github.com/krishnadev-ss/MERNCHAT",
    },
    {
      id: 3,
      title: "dCLoud",
      des: "DCloud is a cutting-edge cloud storage solution that leverages the power of IPFS for secure, decentralized file storage.",
      img: "/cloud.png",
      iconLists: ["/re.svg", "/tail.svg", "/javascript.png", "/node.png", "/express.png", "/ipfs.png"],
      link: "https://github.com/krishnadev-ss/dcloud-frontend",
    },
    {
      id: 4,
      title: "CDR Analyzer",
      des: "Developed a website for analyzing CDR(Call detail record) for Hi-Tech Cell during the internship period.",
      img: "/cdr.png",
      iconLists: ["/re.svg", "/tail.svg", "/php.png", "/mysql.png", "/javascript.png"],
      link: "https://github.com/krishnadev-ss/CDR-ANALYZER",
    },
    
  ];
  

  

  export const workExperience = [
    {
      id: 1,
      title: "Cybersecurity Intern",
      Organization: "Organiztion: Kerala Police",
      desc: "Assisted in the development of a web-based platform using React.js for analyzing CDR data.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Designer Intern",
      Organization: "Organiztion: Keltron",
      desc: "Designed a web site for a client, from initial concept using Figma and got knowledge on Wordpress for small projects.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a web site for a client, from initial concept.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/krishnadev-ss",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/krishnadevSS2",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/krishnadev-s-s-6a5252195/",
    },
    {
      id: 4,
      img: "/insta.svg",
      link: "https://www.instagram.com/___krishnadev/",
    },
    {
      id: 5,
      img: "/wha.svg",
      link: "https://wa.me/919747414175",
    },
  ];