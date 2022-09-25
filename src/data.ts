import { FaAccessibleIcon, FaGamepad, FaEnvelope, FaGithub, FaLinkedin, FaRegFileCode, FaRegKeyboard } from "react-icons/fa";

export const personalData = {
    intro: `McMaster Computer Engineering Class of 2023. Always looking for ways to improve and learn more about low-level programming, if you would like to reach out you can see my resume and contacts in the sidebar!`,
};

export const aboutMe = {
    intro: {
        img:
        'https://lh3.googleusercontent.com/pw/AL9nZEXQ96yTzykWjg-cNiHm_WivwAQcsBNDQmrXwO5vck-rDtbl-3ASWlZRQgDBRdTWFU01GvelcqBaJz567Ad9VHg9TVAYCNh9BbKz5y9SbYAwBQzkga9Uc19_OQI23wv_CFGganL3PLdx10THIddNZNEW=w710-h943-no?authuser=0',
        title: 'Welcome to my site!',
        date: '',
        link: 'https://github.com/murillc/lidar-room-plotter',
        text:
        "I'm a final year Computer Engineering student at McMaster who enjoys learning about and interacting with the fundamental ways computers are organized and implemented. Website WIP (I want to leverage new experience to improve it!)",
    },
    data: [
        {
            header: 'Skills',
            icon: FaAccessibleIcon,
            list: ['a', 'b', 'c']
        },
        {
            header: 'Interests',
            icon: FaAccessibleIcon,
            list: ['a', 'b', 'c']
        }
    ],
};
    

// export const links : { [key:string]: string } = [
export const links = [
    { 
        text:'Resume',
        link:'https://drive.google.com/file/d/1gibVhE1IDKQ2mDz-rdr8PdbRZNEE0ihk/view?usp=sharing',
        icon: FaRegFileCode,
    },
    { 
        text:'Email',
        link:'mailto:crmurillo117@gmail.com',
        icon: FaEnvelope,
    },
    { 
        text:'Github',
        link:'https://github.com/murillc',
        icon: FaGithub,
    },
    { 
        text:'Linkedin',
        link:'https://www.linkedin.com/in/crmur/',
        icon: FaLinkedin,
    },
];


export const softwareProjects = [
{
    img:
    'https://i.imgur.com/gXKrGBQ.png',
    title: 'Time of Flight LIDAR Room Mapper',
    date: 'C, Embedded Systems',
    link: 'https://github.com/murillc/lidar-room-plotter',
    text: [
    `
    Prototyped a LIDAR system that visualizes the room it's in in 3D space.`,
    `Programmed on a Texas Instruments MSP432E401Y microcontroller with Embedded C using Keil µVision.`,
    `Visualized the data collected with Python Open3D.`,
    `Documented the reasoning behind each design decision, its circuit schematic, programming logic flowcharts, and usage.`
    ],
},
{
    img: 'https://cdn.britannica.com/62/85162-050-C8698F1F/CN-Tower-Toronto.jpg',
    title: 'Software Defined Radio',
    date: 'C++, Python',
    link: '/',
    text: [
        `Modelled and implemented a software defined radio that runs on a Raspberry Pi that takes in a signal from a Radio-Frequency dongle and transforms it into mono and stereo audio according to radio standard specifications.`,
        `Modelled in Python, implemented in C++.`,
    ],
},
{
    img: 'https://static.jam.host/raw/b21/22/z/4c08d.png',
    title: 'Top-Down Stealth Video Game',
    date: 'C#, Unity',
    link: 'https://github.com/murillc/LDJam-Stealth-Game',
    text: [
        `Designed and programmed a game within 72 hours in a group of 3`,
        `Utilized the Unity Game Engine efficiently in conjunction with C# scripts to complete the challenge`,
        `Collaborated with Git for tight version control and smooth merging`,
    ],
},

{
    img: 'https://cdn.discordapp.com/attachments/482051217736859648/806048517645926400/download_1.png',
    title: 'Hardware Implementation of an Image Decompressor',
    date: 'SystemVerilog, Quartus II',
    link: '/',
    text: [
        `
        Designed an image decompressor of a custom JPEG-like image format.`,
        `Decodes a compressed image stored on an external SRAM, stores it back into the SRAM and displays the recovered image through a VGA controller.`,
        `Written in SystemVerilog, simulated in ModelSim and verified the hardware through Quartus. 
`,
    ],
},
{
    img: 'https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2019/04/25112909/shutterstock_1073953772-860x574.jpg',
    title: 'SocialSentiment ',
    date: 'Node.js',
    link: 'https://github.com/BilalShakh/Social-Sentiment',
    text: [
    `Designed at YHack 2019`,
    `Web-app designed for the JetBlue challenge. The challenge asked to find out what the public thinks of JetBlue and come up with a hypothesis based on the data.`,
    `Utilizes Google Cloud's Natural Language API to analyze the sentiment from posts scraped on social media and displays the data in a bar graph with accompanying details`,
    ],
},

];