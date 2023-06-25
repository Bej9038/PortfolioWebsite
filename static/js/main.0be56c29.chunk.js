(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(25),o=s.n(n),r=s(10),c=(s(37),s(38),s(39),s(40),s(41),s(42),s(43),s(44),s(45),s.p,s(8)),l=s(12),d=s(4),h=s(0);var m=function(){return Object(h.jsx)("div",{className:"NavBar",children:Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("header",{className:"hero",children:[Object(h.jsx)("h1",{className:"hero-text",children:Object(h.jsx)("span",{children:" Ben Jordan"})}),Object(h.jsx)("p",{className:"home-sub-text",children:"CS Master's Student at Cornell"}),Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("a",{target:"_blank",href:"https://github.com/Bej9038",className:"icon-link",children:Object(h.jsx)(l.a,{icon:d.b,className:"icon"})}),Object(h.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/ben-jordan-b745a0194/",className:"icon-link",children:Object(h.jsx)(l.a,{icon:d.c,className:"icon"})})]})]}),Object(h.jsxs)("ul",{className:"nav-items",children:[Object(h.jsx)("lin",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(h.jsx)("lin",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/Projects",exact:!0,activeClassName:"active",children:"Projects"})}),Object(h.jsx)("lin",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/Contact",exact:!0,activeClassName:"active",children:"Contact"})})]}),Object(h.jsx)("div",{className:"footer footer",children:Object(h.jsx)("p",{children:"@2023 Ben Jordan"})})]})})};var u=function(e){var t=e.title,s=e.progress,a="title25 .9s ease forwards";return 50===s?a="title50 .9s ease forwards":75===s?a="title75 .9s ease forwards":100===s&&(a="title100 .9s ease forwards"),Object(h.jsxs)("div",{className:"Title",children:[Object(h.jsx)("div",{className:"page-bar",children:Object(h.jsx)("div",{className:"page-bar-progress",style:{animation:a}})}),Object(h.jsxs)("h3",{children:[t,Object(h.jsx)("span",{children:t})]})]})};var p=function(e){var t=e.skill;return e.progress,Object(h.jsx)("div",{className:"Skills",children:Object(h.jsx)("div",{className:"skills-container",children:Object(h.jsx)("h5",{className:"skill-title",children:t})})})},b=s.p+"static/media/Ben Jordan [June 2023 Resume] V3.3cd4a462.pdf";var g=function(){return Object(h.jsx)("div",{className:"ImageSection",children:Object(h.jsxs)("div",{className:"about-info",children:[Object(h.jsxs)("p",{className:"about-text",children:[Object(h.jsx)("span",{children:"Nothing excites me more than seeing a project I've spent months working on come to life."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Software engineering and music are without a doubt my favorite ways to express this passion. At the moment, I'm most interested in machine learning and its applications in audio, but I also enjoy learning about topics such as computer vision, computer systems, and graph theory.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Outside of academics, I love being active, visiting new places, and music. As an undergrad, I was a member of RIT's varsity track and field team."]}),Object(h.jsx)("a",{style:{color:"var(--font-color2)"},href:b,download:!0,children:Object(h.jsx)("button",{className:"btn",children:"Download CV"})})]})})};var j=function(){return Object(h.jsxs)("div",{className:"AboutPage",children:[Object(h.jsx)(u,{title:"About Me",progress:25}),Object(h.jsx)(g,{}),Object(h.jsx)(u,{title:"Skills",progress:50}),Object(h.jsxs)("div",{className:"skills-group",children:[Object(h.jsx)(p,{skill:"C#",progress:"90%"}),Object(h.jsx)(p,{skill:"Java",progress:"90%"}),Object(h.jsx)(p,{skill:"JavaScript",progress:"90%"}),Object(h.jsx)(p,{skill:"C++",progress:"90%"}),Object(h.jsx)(p,{skill:"C",progress:"90%"}),Object(h.jsx)(p,{skill:"Python",progress:"80%"}),Object(h.jsx)(p,{skill:"NumPy",progress:"80%"}),Object(h.jsx)(p,{skill:"PyTorch",progress:"80%"}),Object(h.jsx)(p,{skill:"Angular",progress:"70%"}),Object(h.jsx)(p,{skill:"SQL",progress:"60%"}),Object(h.jsx)(p,{skill:"Git",progress:"100%"}),Object(h.jsx)(p,{skill:"Unit Testing",progress:"100%"}),Object(h.jsx)(p,{skill:"Linux",progress:"100%"}),Object(h.jsx)(p,{skill:"Agile Development",progress:"100%"})]})]})},f=s(3),w=s(31);var x=s(22),v=s.n(x);var y=function(e){var t=e.menuItem,s=e.id,i=e.setId,n=Object(a.useState)(!1),o=Object(r.a)(n,2),c=o[0],l=o[1],d=Object(a.useState)(0),m=Object(r.a)(d,2);return m[0],m[1],Object(h.jsx)("div",{className:"MenuItem",children:t.map((function(e){return Object(h.jsxs)("div",{className:"portfolio",children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsxs)("div",{style:{maxHeight:"".concat(!c||-1!==s&&e.id!==s?"24vh":"200vh")},className:"project-content",children:[Object(h.jsx)("div",{className:"".concat(!c||-1!==s&&e.id!==s?"text-cover":"text-cover-plain")}),Object(h.jsx)("button",{className:"expand-btn",onClick:function(){c?(i(-1),l(!1)):(i(e.id),l(!0))},children:"Expand"}),Object(h.jsxs)("div",{className:"flex-container",children:[Object(h.jsx)("p",{className:"description",children:e.descriptions&&e.descriptions[0]?e.descriptions[0]:""}),function(){if(e.images&&e.images[0])return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"img",src:e.images[0],alt:""}),Object(h.jsx)("div",{className:"img-caption",children:e.imagecap[0]})]})}(),Object(h.jsx)("p",{className:"description",children:e.descriptions&&e.descriptions[1]?e.descriptions[1]:""}),function(){if(e.images&&e.images[1])return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"img",src:e.images[1],alt:""}),Object(h.jsx)("div",{className:"img-caption",children:e.imagecap[1]})]})}(),function(){if(e.audio)return Object(h.jsxs)("div",{className:"audio-container",children:[Object(h.jsx)(v.a,{src:e.audio[0],controls:!0}),Object(h.jsx)(v.a,{src:e.audio[1],controls:!0})]})}(),Object(h.jsx)("p",{className:"description",children:e.descriptions&&e.descriptions[2]?e.descriptions[2]:""}),function(){if(e.images&&e.images[2])return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"img",src:e.images[2],alt:""}),Object(h.jsx)("div",{className:"img-caption",children:e.imagecap[2]})]})}(),Object(h.jsx)("p",{className:"description",children:e.descriptions&&e.descriptions[3]?e.descriptions[3]:""}),function(){if(e.images&&e.images[3])return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"img",src:e.images[3],alt:""}),Object(h.jsx)("div",{className:"img-caption",children:e.imagecap[3]})]})}()]})]})]},e.id)}))})},O=s.p+"static/media/dslabs1.d3e62336.PNG",N=s.p+"static/media/dslabs2.37fb7c6f.png",k=s.p+"static/media/SynthLM3.828823aa.PNG",I=s.p+"static/media/SynthLM4.a3f325ba.PNG",T=s.p+"static/media/SAE1.ee662d30.PNG",P=s.p+"static/media/SAE2.2881e408.PNG",S=(s.p,s.p+"static/media/SAE4.5677207e.PNG"),A=s.p+"static/media/ITP1.c2d554f0.PNG",C=s.p+"static/media/ITP2.7500f3b1.PNG",G=s.p+"static/media/ITP3.e9118fa3.PNG",M=s.p+"static/media/ITP4.bc1ecae6.PNG",E=s.p+"static/media/GNN1.93a9ac99.PNG",q=s.p+"static/media/GNN2.d55ebba0.png",L=(s.p,s.p+"static/media/EQ2.4f946a9f.PNG"),B=s.p+"static/media/clarinet-dry.7f32045e.mp3",R=s.p+"static/media/clarinet-wet.0e96b129.mp3",D=s.p+"static/media/eq-dry.d1d955e3.mp3",z=s.p+"static/media/eq-wet.9ed82bf8.mp3",J={synthlm1:"Over the past couple of years, there's been a decent amount of research published related to audio generation and compression using deep learning. After coming across Google's MusicLM, I was inspired to create my own deep learning powered software synthesizer.",synthlm2:'My goal with this project is to create the first text-to-sample synthesizer meant for music production. Rather than generating entire songs like MusicLM and similar projects, my focus is on generating short audio samples. For example, if someone was to enter the text "metallic snare A#", the synth should be able to generate a tuned snare sample. To me this task seems more feasible and more useful than creating whole songs. There is already an abundance of labeled sample packs online that can be used for customizable training, generating samples removes the need to learn long term structure, and audio samples are much more useful for musicians compared to entire songs.',synthlm3:"At the moment, I've been going through older papers that MusicLM builds on such as AudioLM, SoundStream, and BERT. Recently, Meta also released their own audio generation model called AudioCraft, which may be a promising option given that its open-source and would require less training than MusicLM's multi-model, hierarchical structure. I'm hoping to get a somewhat usable model trained this summer and am looking forward to seeing the results!",dslabs1:"DSLabs was a semester long project that I completed while taking Cornell's CS5414 (Distributed Computing) with Lorenzo Alvisi. This class was easily one of the most challenging, rewarding, and well put together courses I have ever taken. The project itself consisted of a framework that allows students to create, test, and debug distributed systems, and four major labs where we were tasked with implementing and checking distributed systems similar in functionality to Google's Spanner.",dslabs2:'Lab 1 involved implementing an "at-most-once" key-value store (duplicate commands will only execute once), along with a basic client and server. Lab2 consisted of adding primary-backup replication to lab 1 using an all knowing view service that decides on primary backup configurations. This allows for state replication and therefore consistency, but it also leaves us with a single point of failure. ',dslabs3:"Lab 3 fixes this issue using Paxos. Paxos is an amazing algorithm that allows a group of servers to be fault tolerant as long as f <= (n-1)/2. It also guarantees that consensus can be reached during periods of synchrony. This part involved a bit too many hours of grinding in order to debug the system, but I'm proud to say that we eventually passed all of the test cases.",dslabs4:"Lab 4 added on multi-key transactions and sharding. This allows the system to process operations in parallel thus increasing performance proportional to the number of server groups. We also had to implement two phase commit for agreement between server groups during transactions. On its own 2PC is susceptible to failures, but when paired with paxos provides agreement without major availability issues.",sae1:"After working for Professor Sungyoung Kim at RIT for over a year starting in 2020, I was rehired as a part-time developer during my last semester of undergrad. During this semester, my task was to write a program that would allow Dr. Kim to collect data on how listeners interpret the spatial characteristics of audio. This was quite an enjoyable project because I was given a general overview of what to build, but every aspect of design and implementation was left up to me.",sae2:"The main feature of this program was an interactive 3D visual that is supposed to represent audio and its spacial characteristics. Users will hear a series of songs, and then adjust a set of four attribute sliders (width, depth, immersion, and clarity) to morph the 3D visual until it best describes each song. Users can also use their mouse to adjust the camera's perspective of the 3D visual.",sae3:"Given that this project was supposed to be a website, I decided to use Angular just to get some more experience with it. I really like Angular + Typescript because of the OOP style, and because it helps me keep my projects organized. As for the 3D visual, I used a well-known library called three.js. This was easily the most challenging part of the project since it was my first time doing anything related to computer graphics, but I learned a lot! I created a custom shader in order to have an animation that changed based on the music's volume and the attribute sliders. ",sae4:"For the overall structure of the software, I added my basic components such as the attribute sliders, a view component to hold the three.js canvas, a singular audio service that controlled everything sound related and could injected into any component, and a singular session values service, that was used to maintain important values during a instance of the program (such as the current round number, whether light or dark mode is on). This service was injected into the slider components and the view component, so both the sliders and the 3D graphic could have realtime access to the values of the attribute sliders.",ipt1:"This project was created during my internship in 2020 with Professor Sungyoung Kim. In collaboration with a team from University of Iowa, we were attempting to evaluate the effectiveness of hearing devices called hybrid cochlear implants. The team was also interested in people's ability to understand speech depending on background noise level. In short, I was given the task of independently creating a website that would allow the researchers to test participants hearing abilities and collect data. This ended up being a great project because it was the largest project I had ever worked on, I got to learn about web development, and the team successfully published research using the data collected from trials done with the software. Its a good feeling when the software you make is used for something important.",ipt2:"The website contains 5 unique testing modules. The Inharmonicity Training and Speech-In-Noise tests have 2 and 3 difficulty levels respectively. All tests heavily use the Javascript Web Audio API to generate and process sound at various frequencies and levels. The website is connected to a backend SQL database to store data for each user.",ipt3:'The main focus of the program was the Inharmonicity Training. In this module, users are presented with a box that produces a tone as their mouse hovers over it. The tone changes depending on the location of the mouse within the box. This tone consists of a group of low frequency oscillators and a group of high frequency oscillators set at precise frequency ratios. The goal is for the user to move their mouse inside the box until the tone sounds most "harmonic". After selecting a point, a gradient appears on the box that shows the user how correct their guess was. This is calculated based on the randomized frequency ranges of the box set before each trial.',gnn1:"For the final project in my ML course at RIT, we were tasked with researching a deep learning architecture that we didn't cover in class, proposing an experiment, and then putting together a final paper and presentation to describe our findings. After doing some searching online, I found an architecture known as graph neural networks and decided to experiment with the GraphSAGE architecture specifically.",gnn2:"GraphSAGE operates by randomly sampling a nodes neighbors, and then combining those neighbor embeddings with an aggregation function to represent the context of the original node. One way you can think of this is as a generalization of convolution for graph data, which is the basic principle behind GNN architectures. Implementations",gnn3:"For the experiment, I proposed that if we methodically select which type of aggregation function is used for a given layer, then we would will get better results than by simply using a single type of aggregation for all layers. For the code used to test this theory out, I used the Cora dataset (the mnist for GNNs) along with a PyTorch implementation of GraphSAGE. I implemented max and mean aggregation functions on top of the already implemented repository.",gnn4:"The results showed that the proposed combination of aggregation layers did in fact result in an increase in F1 score, although this experiment was at such a small scale that testing on a larger dataset and model would need to be done to make any conclusions. This turned out to be a great topic because I was in the process of finishing up one of my favorite math classes, graph theory, so graphs concepts were fresh in my mind. It was also cool to study GNNs given that they aren't discussed as much as other modalities of deep learning.",eq1:"As an avid user of music production software, I always wondered how these tools were created and how digital audio processing worked. I also wanted to brush up on my C++ skills. Therefore, to kill two birds with one stone I decided to dive in and make an EQ (a commonly used audio effect) myself.",eq2:"At first, I looked into writing VST3s (the format of an audio plugin) myself. However, it became apparent that this wasn't a simple feat for someone starting out. I ended up using an excellent C++ framework called JUCE that had libraries for both audio processing and UI elements.",eq3:"My final EQ consisted of 2 notch filters for middle frequencies, a low pass filter to cut high frequencies, and a high pass filter to cut low frequencies. The inner workings of the program involved routing input audio through the four filters, and connecting the knobs on the UI I created to the filter parameters. I also ended up editing the code/math for one of the built in JUCE library filters in order to allow the user to select different filter slope values.",eq4:"Although not the worlds flashiest audio plugin, I am very happen I got everything working inside my own music production software. Now that I have more experience behind my belt, I can tackle more interesting ideas that I have.",omni1:"While working on the cochlear implant testing software during my internship with Professor Kim, in my off time from working on that program, I was also given the task of fleshing out another VR/AR idea that the professor had.",omni2:"This program was designed to take in a dry audio sample, and play the audio back is if it was in one of two rooms from any perspective in the room. The final result ended up working surprisingly well.The way it was done was by recording room impulses, which are essentially loud reverb tails, inside a room using an ambisonic microphone. Then I created a program that took those files as input, and combined them in such a way (the equation for this was given to me by the professor) such that they create a new 4 channelspatial audio format.",omni3:"These ambisonic B format audio files were then converted to stereo by a library called Omnitone. In the final program, users can rotate their position in the room using the VR viewer. Users can also select different sound source and listener positions, and mic setups using the controls on the bottom.",portfolio1:"This Website! During quarantine I wanted to give React a try, so I started with a tutorial I found online and made some changes to it. I recently did a re-design as well. I haven't done a ton of web dev since it was never a part of my coursework, but I've always found designing and styling websites to be pretty enjoyable.",portfolio2:"If you're interested, you can check out the code on my GitHub.",temp:"Content coming soon..."},F=[{id:1,category:["2023"],icon1:d.b,descriptions:[J.synthlm1,J.synthlm2,J.synthlm3],title:"SynthLM",images:[k,I],imagecap:["1. The structure of Google's MusicLM","2. Some neat autoencoder audio compression"]},{id:2,category:["2023"],link1:"https://github.com/Bej9038/OmnitoneV2",icon1:d.b,descriptions:[J.dslabs1,J.dslabs2,J.dslabs3,J.dslabs4],images:[O,N],imagecap:["1: The Part-Time Parliament","2: The greatest moment of my life"],title:"DSLabs - Sharded Key-Value Store"},{id:3,category:["2022"],link1:"",icon1:d.b,descriptions:[J.sae1,J.sae2,J.sae3,J.sae4],images:[S,T,P],imagecap:["1: Part of the initial project specifications","2: Welcome menu","3: Playing around with the controls"],title:"Spatial Attributes Evaluation"},{id:4,category:["2020"],link1:"http://auditoryneuro.com/Implant%20Testing%20Program/Signin/Signin.html",link2:"https://github.com/Bej9038/ImplantTestingProgram",icon1:d.a,icon2:d.b,descriptions:[J.ipt1,J.ipt2,J.ipt3],images:[A,G,M,C],imagecap:["1: The main menu","2: Inharmonicty training","3: Setting the frequency ranges on the canvas's axes and creating the oscillators","4: Speech to noise ratio selection"],title:"Implant Testing Program"},{id:7,category:["2021"],link1:"https://github.com/Bej9038/EQ",icon1:d.b,descriptions:[J.temp],audio:[D,z],images:[L],imagecap:["1: The EQ in action in my music production software"],title:"EQ Audio Plugin"},{id:8,category:["2020"],link1:"https://github.com/Bej9038/OmnitoneV2",icon1:d.b,descriptions:[J.temp],audio:[B,R],title:"Omnitone"},{id:5,category:["2022"],link1:"https://github.com/Bej9038/OmnitoneV2",icon1:d.b,descriptions:[J.gnn1,J.gnn2,J.gnn3,J.gnn4],images:[E,q],imagecap:["1: Visualization of CORA. The dataset consists of 2708 scientific publications classified into one of seven classes. The citation network consists of 5429 links between papers.","2: A GraphSAGE layer visualized"],title:"Graph Neural Network Research Project"},{id:6,category:["2021"],link1:"https://github.com/Bej9038/PortfolioWebsite",icon1:d.b,descriptions:[J.portfolio1],title:"Portfolio Website"}];var V=[];F.map((function(e){return e.category.map((function(e){return V.push(e)}))}));var U=["All"].concat(Object(w.a)(V.filter((function(e,t,s){return s.indexOf(e)===t}))));var Q=function(){var e=Object(a.useState)(U),t=Object(r.a)(e,2),s=(t[0],t[1],Object(a.useState)(F)),i=Object(r.a)(s,2),n=i[0],o=(i[1],Object(a.useState)(-1)),c=Object(r.a)(o,2),l=c[0],d=c[1];return Object(h.jsxs)("div",{className:"ProjectsPage",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)(u,{title:"Projects",progress:75})}),Object(h.jsx)("div",{className:"portfolio-menu",children:Object(h.jsx)(y,{menuItem:n,id:l,setId:d})})]})},W=s(32);var K=function(){var e=Object(W.a)("mqkwpwoa"),t=Object(r.a)(e,2),s=t[0],a=t[1];return s.succeeded&&(document.getElementsByClassName("success")[0].style.display="flex",document.getElementById("contact-form").reset()),Object(h.jsxs)("div",{className:"ContactPage",children:[Object(h.jsx)("div",{className:"contact-title",children:Object(h.jsx)(u,{title:"Contact",progress:100})}),Object(h.jsxs)("div",{className:"sections",children:[Object(h.jsx)("div",{className:"map-sect",children:Object(h.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47108.74706434036!2d-76.49837495!3d42.44270305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d08182e0af88f7%3A0xae52768a56ece74!2sIthaca%2C%20NY!5e0!3m2!1sen!2sus!4v1686931967031!5m2!1sen!2sus",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),Object(h.jsxs)("div",{className:"contact-sect",children:[Object(h.jsxs)("form",{autoComplete:"off",onSubmit:a,action:"https://formspree.io/f/mqkwpwoa",method:"post",id:"contact-form",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),Object(h.jsx)("input",{autoComplete:"new-password",type:"text",id:"name",className:"textio",name:"name"})]}),Object(h.jsx)("input",{type:"hidden",value:"prayer"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),Object(h.jsx)("input",{autoComplete:"new-password",type:"text",id:"email",className:"textio",name:"email"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"message",className:"label",children:"Message"}),Object(h.jsx)("textarea",{id:"message",className:"textio",name:"message"})]}),Object(h.jsx)("button",{className:"email-btn",type:"submit",children:"Send"})]}),Object(h.jsx)("div",{className:"success",children:"Massage Received!"})]})]})]})},H=s(11);function _(){var e=Object(f.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Y=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=t[0];return t[1],Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"nav-",children:Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{path:"/",exact:!0,children:Object(h.jsxs)(c.b,{className:"rightarrow",to:"/Projects",exact:!0,children:[Object(h.jsx)(H.b,{}),Object(h.jsx)(H.b,{className:"rightarrow2"})]})}),Object(h.jsxs)(f.a,{path:"/Projects",exact:!0,children:[Object(h.jsxs)(c.b,{className:"leftarrow",to:"/",exact:!0,children:[Object(h.jsx)(H.a,{}),Object(h.jsx)(H.a,{className:"leftarrow2"})]}),Object(h.jsxs)(c.b,{className:"rightarrow",to:"/Contact",exact:!0,children:[Object(h.jsx)(H.b,{}),Object(h.jsx)(H.b,{className:"rightarrow2"})]})]}),Object(h.jsx)(f.a,{path:"/Contact",exact:!0,children:Object(h.jsxs)(c.b,{className:"leftarrow",to:"/Projects",exact:!0,children:[Object(h.jsx)(H.a,{}),Object(h.jsx)(H.a,{className:"leftarrow2"})]})})]})}),Object(h.jsx)("div",{className:"sidebar ".concat(s?"nav-toggle":""),children:Object(h.jsx)(m,{})}),Object(h.jsx)("div",{className:"main-content",children:Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(f.c,{children:[Object(h.jsxs)(f.a,{path:"/",exact:!0,children:[Object(h.jsx)(_,{}),Object(h.jsx)(j,{})]}),Object(h.jsxs)(f.a,{path:"/Projects",exact:!0,children:[Object(h.jsx)(_,{}),Object(h.jsx)(Q,{})]}),Object(h.jsxs)(f.a,{path:"/Contact",exact:!0,children:[Object(h.jsx)(_,{}),Object(h.jsx)(K,{})]})]})})})]})};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.0be56c29.chunk.js.map