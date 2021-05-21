(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(24),r=s.n(i),n=s(11),l=(s(36),s(37),s(38),s(39),s(40),s(41),s(42),s(43),s(44),s.p+"static/media/ProfilePicture.35ed2c25.jpg"),o=s(6),j=s(0);var b=function(){return Object(j.jsx)("div",{className:"NavBar",children:Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)("div",{className:"profile",children:Object(j.jsx)("img",{src:l,alt:""})}),Object(j.jsxs)("ul",{className:"nav-items",children:[Object(j.jsx)("lin",{className:"nav-item",children:Object(j.jsx)(o.b,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(j.jsx)("lin",{className:"nav-item",children:Object(j.jsx)(o.b,{to:"/About",exact:!0,activeClassName:"active",children:"About"})}),Object(j.jsx)("lin",{className:"nav-item",children:Object(j.jsx)(o.b,{to:"/Portfolio",exact:!0,activeClassName:"active",children:"Portfolios"})}),Object(j.jsx)("lin",{className:"nav-item",children:Object(j.jsx)(o.b,{to:"/Contact",exact:!0,activeClassName:"active",children:"Contact"})})]}),Object(j.jsx)("div",{className:"footer footer",children:Object(j.jsx)("p",{children:"@2021 Ben Jordan"})})]})})},m=s(13),d=s(5);var x=function(){return Object(j.jsx)("div",{className:"HomePage",children:Object(j.jsxs)("header",{className:"hero",children:[Object(j.jsxs)("h1",{className:"hero-text",children:["Hi, I'm",Object(j.jsx)("span",{children:" Ben Jordan."})]}),Object(j.jsx)("p",{className:"home-sub-text",children:"I'm a 4th year Software and Audio Engineer from Rochester Institute of Technology"}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("a",{target:"_blank",href:"https://github.com/Bej9038",className:"icon-link",children:Object(j.jsx)(m.a,{icon:d.b,className:"icon"})}),Object(j.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/ben-jordan-b745a0194/",className:"icon-link",children:Object(j.jsx)(m.a,{icon:d.c,className:"icon"})})]})]})})};var h=function(e){var t=e.title,s=e.progress,c="title25 .9s ease forwards";return 50===s?c="title50 .9s ease forwards":75===s?c="title75 .9s ease forwards":100===s&&(c="title100 .9s ease forwards"),Object(j.jsxs)("div",{className:"Title",children:[Object(j.jsx)("div",{className:"page-bar",children:Object(j.jsx)("div",{className:"page-bar-progress",style:{animation:c}})}),Object(j.jsxs)("h3",{children:[t,Object(j.jsx)("span",{children:t})]})]})};var O=function(e){var t=e.skill,s=e.progress;return Object(j.jsx)("div",{className:"Skills",children:Object(j.jsxs)("div",{className:"skills-container",children:[Object(j.jsx)("h5",{className:"skill-title",children:t}),Object(j.jsxs)("div",{className:"skill-bar",children:[Object(j.jsx)("p",{className:"skill-text",children:s}),Object(j.jsx)("div",{className:"skill-progress",children:Object(j.jsx)("div",{className:"progressbar",children:Object(j.jsx)("div",{className:"inner-progress",style:{width:s}})})})]})]})})},p=s.p+"static/media/Ben Jordan Resume Summer 2021.79e2a948.pdf";var u=function(){return Object(j.jsx)("div",{className:"ImageSection",children:Object(j.jsxs)("div",{className:"about-info",children:[Object(j.jsxs)("p",{className:"about-text",children:[Object(j.jsx)("span",{children:"All my life I've had a passion for creating. "}),"Nothing excites me more than seeing a project I've spent many hours perfecting and testing come to life. Coding, Web Design, and Music Production are without a doubt some of my favorite ways to express my creativity. Whether necessary or not, I can spend endless amounts of time working on a program or tweaking a song until it's perfect.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Along with software and audio engineering, I'm a member of RIT's varsity Track and Field team and enjoy spending my time working out and being outdoors."]}),Object(j.jsx)("a",{style:{color:"var(--font-color2)"},href:p,download:!0,children:Object(j.jsx)("button",{className:"btn",children:"Download CV"})})]})})};var g=function(){return Object(j.jsxs)("div",{className:"AboutPage",children:[Object(j.jsx)(h,{title:"About Me",progress:25}),Object(j.jsx)(u,{}),Object(j.jsx)(h,{title:"Skills",progress:50}),Object(j.jsxs)("div",{className:"skills-group",children:[Object(j.jsx)(O,{skill:"Web Audio API",progress:"90%"}),Object(j.jsx)(O,{skill:"HTML",progress:"90%"}),Object(j.jsx)(O,{skill:"Git",progress:"90%"}),Object(j.jsx)(O,{skill:"JavaScript",progress:"90%"}),Object(j.jsx)(O,{skill:"Java",progress:"80%"}),Object(j.jsx)(O,{skill:"CSS/SCSS",progress:"80%"}),Object(j.jsx)(O,{skill:"C",progress:"80%"}),Object(j.jsx)(O,{skill:"Audio Engineering",progress:"80%"}),Object(j.jsx)(O,{skill:"SQL",progress:"70%"}),Object(j.jsx)(O,{skill:"PHP",progress:"70%"}),Object(j.jsx)(O,{skill:"Python",progress:"70%"}),Object(j.jsx)(O,{skill:"React",progress:"60%"})]})]})},f=s(3),v=s(30);var N=function(e){var t=e.categories,s=e.filter;return Object(j.jsx)("div",{className:"Categories",children:t.map((function(e,t){return Object(j.jsx)("button",{className:"port-btn",onClick:function(){return s(e)},children:e},t)}))})};var w=function(e){var t=e.menuItem;return Object(j.jsx)("div",{className:"MenuItem",children:t.map((function(e){return Object(j.jsxs)("div",{className:"portfolio",children:[Object(j.jsx)("h5",{children:e.title}),Object(j.jsxs)("div",{className:"image-data",children:[Object(j.jsx)("img",{className:"img",src:e.image,alt:""}),Object(j.jsxs)("div",{className:"hover-items",children:[Object(j.jsx)("a",{target:"_blank",href:e.link1,children:Object(j.jsx)(m.a,{icon:e.icon1,className:"icon"})}),e.link2?Object(j.jsx)("a",{target:"_blank",href:e.link2,children:Object(j.jsx)(m.a,{icon:e.icon2,className:"icon"})}):""]})]})]},e.id)}))})},k=s.p+"static/media/port1.d1857bf5.jpg",y=s.p+"static/media/port2.13c6b5d4.jpg",P=s.p+"static/media/port3.b5cb8f35.webp",C=s.p+"static/media/port4.374376c9.webp",S=[{id:1,category:"Javascript",link1:"http://auditoryneuro.com/Implant%20Testing%20Program/Signin/Signin.html",link2:"https://github.com/Bej9038/ImplantTestingProgram",icon1:d.a,icon2:d.b,image:k,title:"Implant Testing Program"},{id:2,category:"Javascript",link1:"https://github.com/Bej9038/OmnitoneV2",icon1:d.b,image:y,title:"Omnitone"},{id:3,category:"Music",link1:"https://www.youtube.com/channel/UCqztrHyJRJKGxSo5_cpzWaA",link2:"https://soundcloud.com/odysymusic",icon1:d.e,icon2:d.d,image:P,title:"Electronic Music Project"},{id:4,category:"Javascript",link1:"https://github.com/Bej9038/PortfolioWebsite",icon1:d.b,image:C,title:"Portfolio Website"}],A=["All"].concat(Object(v.a)(new Set(S.map((function(e){return e.category})))));var I=function(){var e=Object(c.useState)(A),t=Object(n.a)(e,2),s=t[0],a=(t[1],Object(c.useState)(S)),i=Object(n.a)(a,2),r=i[0],l=i[1];return Object(j.jsxs)("div",{className:"PortfolioPage",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)(h,{title:"Portfolio",progress:75})}),Object(j.jsxs)("div",{className:"portfolio-menu",children:[Object(j.jsx)(N,{categories:s,filter:function(e){if("All"!==e){var t=S.filter((function(t){return t.category===e}));l(t)}else l(S)}}),Object(j.jsx)(w,{menuItem:r})]})]})},J=s(31);var B=function(){var e=Object(J.a)("mqkwpwoa"),t=Object(n.a)(e,2),s=t[0],c=t[1];return s.succeeded,Object(j.jsxs)("div",{className:"ContactPage",children:[Object(j.jsx)("div",{className:"contact-title",children:Object(j.jsx)(h,{title:"Contact",progress:100})}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)("div",{className:"map-sect",children:Object(j.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409184.4457547094!2d-77.01656342625483!3d42.317772110826056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d08182e0af88f7%3A0xae52768a56ece74!2sIthaca%2C%20NY!5e1!3m2!1sen!2sus!4v1621097926772!5m2!1sen!2sus",width:"450",height:"450",title:"map",style:{border:0},loading:"lazy"})}),Object(j.jsx)("div",{className:"contact-sect",children:Object(j.jsxs)("form",{autoComplete:"off",onSubmit:c,action:"https://formspree.io/f/mqkwpwoa",method:"post",id:"contact-form",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),Object(j.jsx)("input",{autoComplete:"new-password",type:"text",id:"name",className:"textio",name:"name"})]}),Object(j.jsx)("input",{type:"hidden",value:"prayer"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),Object(j.jsx)("input",{autoComplete:"new-password",type:"text",id:"email",className:"textio",name:"email"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"message",className:"label",children:"Message"}),Object(j.jsx)("textarea",{id:"message",className:"textio",name:"message"})]}),Object(j.jsx)("button",{className:"email-btn",type:"submit",children:"Send"})]})})]})]})},M=s(9);var T=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0];return t[1],Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"nav-",children:Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/",exact:!0,children:Object(j.jsxs)(o.b,{className:"rightarrow",to:"/About",exact:!0,children:[Object(j.jsx)(M.b,{}),Object(j.jsx)(M.b,{className:"rightarrow2"})]})}),Object(j.jsxs)(f.a,{path:"/About",exact:!0,children:[Object(j.jsxs)(o.b,{className:"leftarrow",to:"/",exact:!0,children:[Object(j.jsx)(M.a,{}),Object(j.jsx)(M.a,{className:"leftarrow2"})]}),Object(j.jsxs)(o.b,{className:"rightarrow",to:"/Portfolio",exact:!0,children:[Object(j.jsx)(M.b,{}),Object(j.jsx)(M.b,{className:"rightarrow2"})]})]}),Object(j.jsxs)(f.a,{path:"/Portfolio",exact:!0,children:[Object(j.jsxs)(o.b,{className:"leftarrow",to:"/About",exact:!0,children:[Object(j.jsx)(M.a,{}),Object(j.jsx)(M.a,{className:"leftarrow2"})]}),Object(j.jsxs)(o.b,{className:"rightarrow",to:"/Contact",exact:!0,children:[Object(j.jsx)(M.b,{}),Object(j.jsx)(M.b,{className:"rightarrow2"})]})]}),Object(j.jsx)(f.a,{path:"/Contact",exact:!0,children:Object(j.jsxs)(o.b,{className:"leftarrow",to:"/Portfolio",exact:!0,children:[Object(j.jsx)(M.a,{}),Object(j.jsx)(M.a,{className:"leftarrow2"})]})})]})}),Object(j.jsx)("div",{className:"sidebar ".concat(s?"nav-toggle":""),children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"main-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/",exact:!0,children:Object(j.jsx)(x,{})}),Object(j.jsx)(f.a,{path:"/About",exact:!0,children:Object(j.jsx)(g,{})}),Object(j.jsx)(f.a,{path:"/Portfolio",exact:!0,children:Object(j.jsx)(I,{})}),Object(j.jsx)(f.a,{path:"/Contact",exact:!0,children:Object(j.jsx)(B,{})})]})})})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(T,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9c0eb045.chunk.js.map