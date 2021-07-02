import { FaAccessibleIcon, FaGamepad, FaGithub, FaLinkedin, FaRegFileCode, FaRegKeyboard } from "react-icons/fa";

export const personalData = {
    intro: `Hello! I am a Computer Engineering student who has recently finished 3rd year at McMaster University, with a keen interest in both web dev and embedded systems. In my free time I like to read and play fighting games. Always looking for new opportunities to learn and apply myself.`,
};
    

// export const links : { [key:string]: string } = [
export const links = [
    { 
        text:'CompEng Resume',
        link:'https://drive.google.com/file/d/1ieFEQ5etFs2PdZtFhax6bjcdMt_vDLcU/view?usp=sharing',
        icon: FaRegKeyboard,
    },
    { 
        text:'Software Resume',
        link:'https://drive.google.com/file/d/1NNoz2-dB6BYPYhED0BKw3QstY_9dcDOK/view?usp=sharing',
        icon: FaRegFileCode,
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
    date: 'June 2021',
    link: 'https://github.com/murillc/lidar-room-plotter',
    text: [
    `
    Prototyped a LIDAR (Light Detection and Ranging) system that takes data from slices of a room with a time of flight sensor and feeds it into a PC which visualizes the room with the data in 3D space.`,
    `Programmed on a Texas Instruments MSP432E401Y microcontroller with Embedded C using Keil µVision.`,
    `Visualized the data collected with Python Open3D.`,
    `Documented the reasoning behind each design decision, its circuit schematic, programming logic flowcharts, and usage.`
    ],
},
{
    img: 'https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2019/04/25112909/shutterstock_1073953772-860x574.jpg',
    title: 'SocialSentiment ',
    date: 'October 2019',
    link: 'https://github.com/BilalShakh/Social-Sentiment',
    text: [
    `Designed at YHack 2019`,
    `Web-app designed for the JetBlue challenge. The challenge asked to find out what the public thinks of JetBlue and come up with a hypothesis based on the data.`,
    `Utilizes Google Cloud's Natural Language API to analyze the sentiment from posts scraped on social media and displays the data in a bar graph with accompanying details`,
    ],
},
{
    img: 'https://cdn.britannica.com/62/85162-050-C8698F1F/CN-Tower-Toronto.jpg',
    title: 'Software Defined Radio',
    date: 'April 2021',
    link: '/',
    text: [
        `Modelled and implemented a software defined radio that runs on a Raspberry Pi that takes in a signal from a Radio-Frequency dongle and transforms it into mono and stereo audio according to radio standard specifications.`,
        `Modelled in Python, implemented in C++.`,
    ],
},
{
    img: 'https://cdn.discordapp.com/attachments/482051217736859648/806048517645926400/download_1.png',
    title: 'Hardware Implementation of an Image Decompressor',
    date: 'December 2020',
    link: '/',
    text: [
        `
        Designed an image decompressor of a custom JPEG-like image format.`,
        `Decodes a compressed image stored on an external SRAM, stores it back into the SRAM and displays the recovered image through a VGA controller.`,
        `Written in SystemVerilog, simulated in ModelSim and verified the hardware through Quartus. 
`,
    ],
},
];

export const webappLinks = [
    {
      img:
        '',
      title: 'Placeholder',
      date: 'June 2021',
      link: '/',
      text: [
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ],
    },
  ];
