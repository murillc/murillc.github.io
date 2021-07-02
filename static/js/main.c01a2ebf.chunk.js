(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{96:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(67),s=n.n(o),r=n(51),l=n(99),c=n(107),d=n(120),h=n(111),m=n(121),p=n(108),u=n(118),j=n(34),g={intro:"Hello! I am a Computer Engineering student who has recently finished 3rd year at McMaster University, with a keen interest in both web dev and embedded systems. In my free time I like to read and play fighting games. Always looking for new opportunities to learn and apply myself."},b=[{text:"CompEng Resume",link:"https://drive.google.com/file/d/1ieFEQ5etFs2PdZtFhax6bjcdMt_vDLcU/view?usp=sharing",icon:j.d},{text:"Software Resume",link:"https://drive.google.com/file/d/1NNoz2-dB6BYPYhED0BKw3QstY_9dcDOK/view?usp=sharing",icon:j.c},{text:"Github",link:"https://github.com/murillc",icon:j.a},{text:"Linkedin",link:"https://www.linkedin.com/in/crmur/",icon:j.b}],f=[{img:"https://i.imgur.com/gXKrGBQ.png",title:"Time of Flight LIDAR Room Mapper",date:"June 2021",link:"https://github.com/murillc/lidar-room-plotter",text:["\n    Prototyped a LIDAR (Light Detection and Ranging) system that takes data from slices of a room with a time of flight sensor and feeds it into a PC which visualizes the room with the data in 3D space.","Programmed on a Texas Instruments MSP432E401Y microcontroller with Embedded C using Keil \xb5Vision.","Visualized the data collected with Python Open3D.","Documented the reasoning behind each design decision, its circuit schematic, programming logic flowcharts, and usage."]},{img:"https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2019/04/25112909/shutterstock_1073953772-860x574.jpg",title:"SocialSentiment ",date:"October 2019",link:"https://github.com/BilalShakh/Social-Sentiment",text:["Designed at YHack 2019","Web-app designed for the JetBlue challenge. The challenge asked to find out what the public thinks of JetBlue and come up with a hypothesis based on the data.","Utilizes Google Cloud's Natural Language API to analyze the sentiment from posts scraped on social media and displays the data in a bar graph with accompanying details"]},{img:"https://cdn.britannica.com/62/85162-050-C8698F1F/CN-Tower-Toronto.jpg",title:"Software Defined Radio",date:"April 2021",link:"/",text:["Modelled and implemented a software defined radio that runs on a Raspberry Pi that takes in a signal from a Radio-Frequency dongle and transforms it into mono and stereo audio according to radio standard specifications.","Modelled in Python, implemented in C++."]},{img:"https://cdn.discordapp.com/attachments/482051217736859648/806048517645926400/download_1.png",title:"Hardware Implementation of an Image Decompressor",date:"December 2020",link:"/",text:["\n        Designed an image decompressor of a custom JPEG-like image format.","Decodes a compressed image stored on an external SRAM, stores it back into the SRAM and displays the recovered image through a VGA controller.","Written in SystemVerilog, simulated in ModelSim and verified the hardware through Quartus. \n"]}],x=[{img:"",title:"Placeholder",date:"June 2021",link:"/",text:["\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}],O=n(116),w=n(109),y=n(119),k=n(112),S=n(2),v=function(e){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(c.a,{display:{md:"flex"},className:"pulse",borderRadius:"lg",children:[Object(S.jsx)(p.a,{fontSize:"lg",href:e.proj.link,isExternal:!0,minW:"350px",children:Object(S.jsx)(w.a,{ratio:4/3,children:Object(S.jsx)(y.a,{src:e.proj.img})})}),Object(S.jsxs)(c.a,{p:3,children:[Object(S.jsx)(d.a,{isInline:!0,alignItems:"center",children:Object(S.jsx)(p.a,{href:e.proj.link,children:Object(S.jsxs)(h.a,{fontSize:"lg",children:[e.proj.title,Object(S.jsx)("span",{children:Object(S.jsx)(k.a,{fontSize:"sm",fontWeight:"normal",children:e.proj.date})})]})})}),e.proj.text&&Object(S.jsx)(d.a,{pt:3,spacing:3,children:e.proj.text&&e.proj.text.map((function(e){return Object(S.jsxs)(k.a,{children:["- ",e]})}))})]})]})})},M=n(69),P=n.n(M),D=n(93);var I,C=function(){return Object(l.b)().toggleColorMode,Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(c.a,{display:{md:"flex"},m:10,spacing:3,children:[Object(S.jsxs)(d.b,{align:"left",maxW:"md",minW:"350px",children:[Object(S.jsx)(d.a,{direction:"row",children:Object(S.jsx)(h.a,{children:"Carlos Murillo"})}),Object(S.jsx)(c.a,{p:1,border:"2px",borderColor:"gray.600",borderRadius:"lg",children:g.intro}),Object(S.jsx)(m.a,{columns:2,spacing:4,children:b.map((function(e){return Object(S.jsx)(p.a,{display:"block",href:e.link,isExternal:!0,children:Object(S.jsx)(u.a,{leftIcon:Object(S.jsx)(e.icon,{}),isFullWidth:!0,children:e.text})})}))})]}),Object(S.jsxs)(O.e,{variant:"enclosed-colored",mt:{base:4,md:0},ml:{md:3},children:[Object(S.jsxs)(O.b,{children:[Object(S.jsx)(O.a,{children:"Projects"}),Object(S.jsx)(O.a,{children:"Webapps"}),Object(S.jsx)(O.a,{children:"Raw Data"})]}),Object(S.jsxs)(O.d,{children:[Object(S.jsx)(O.c,{children:Object(S.jsx)(d.a,{spacing:3,children:f.map((function(e){return Object(S.jsx)(v,{proj:e})}))})}),Object(S.jsx)(O.c,{children:Object(S.jsx)(d.a,{spacing:3,children:x.map((function(e){return Object(S.jsx)(v,{proj:e})}))})}),Object(S.jsx)(O.c,{children:Object(S.jsx)(P.a,{mainStyle:"padding:1em;",style:{borderRadius:"20px"},id:"json-pretty",data:{personalData:Object(r.a)({},g),softwareProjects:Object(r.a)({},f),webappLinks:Object(r.a)({},x)},theme:D})})]})]})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))},z=n(117),F=n(115),B=Object(F.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),E=n(71),L=n(72),A=Object(L.a)(I||(I=Object(E.a)(["\n\n  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');\n  \n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    background: black;\n    color: #fff;\n  }\n\n  body {\n    font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: bold;\n    font-size: inherit;\n    font-family: 'IBM Plex Sans' !important;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n\n  }\n\n  p,\n  label {\n    font-family: 'IBM Plex Sans';\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .pulse {\n    border: 1px solid;\n  overflow: hidden;\n  position: relative;\n  \n  span {\n    z-index: 20;\n  }\n  \n  &:after {\n    background: #fff;\n    content: \"\";\n    height: 155px;\n    left: -75px;\n    opacity: .2;\n    position: absolute;\n    top: -50px;\n    transform: rotate(35deg);\n    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);\n    width: 50px;\n    z-index: -10;\n  }\n  } \n\n.pulse:hover {\n  &:after {\n    left: 120%;\n    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);\n  }\n  \n}\n\n\n"])));s.a.render(Object(S.jsxs)(a.a.StrictMode,{children:[Object(S.jsx)(z.a,{theme:B,children:Object(S.jsx)(C,{})}),Object(S.jsx)(A,{})]}),document.getElementById("root")),R()}},[[96,1,2]]]);
//# sourceMappingURL=main.c01a2ebf.chunk.js.map