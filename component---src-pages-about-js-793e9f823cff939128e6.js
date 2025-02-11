"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[682],{6301:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),n=r(4160),o=r(9700);var l=()=>{const{filter:e,setFilter:t}=a.useContext(o.Z);return(0,a.useEffect)((()=>{let e=setTimeout((()=>{window.scrollTo(0,0),clearTimeout(e)}),1)}),[]),a.createElement("div",{class:"navbar-container"},a.createElement("div",{class:"navbar-left"},a.createElement(n.rU,{to:"/"},"ita futran")),a.createElement("div",{class:"navbar-right"},a.createElement(n.rU,{to:"/",class:"nav-link"},"home"),a.createElement(n.rU,{to:"/about",class:"nav-link",onClick:()=>t("all")},"about"),a.createElement(n.rU,{to:"/projects",class:"nav-link",onClick:()=>t("all")},"projects"),a.createElement("a",{href:"https://drive.google.com/file/d/12dx9WmAIUtEn6whvw-P0xa2Ui3PRz5sn/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},a.createElement("button",{class:"resume-button"},"resume"))))};var i=e=>{let{children:t}=e;return a.createElement(o.Z.Consumer,null,(e=>a.createElement("div",{id:"layout",class:"layout-container"},a.createElement(l,null),t)))}},896:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(7294),n=r(6301);var o=e=>{var t;let{props:r}=e;const n=a.createElement(a.Fragment,null,r.project?a.createElement("div",{class:"title"},r.link?a.createElement("a",{href:"/projects/"+r.link,target:"_blank",rel:"noreferrer",class:"project-header"},r.project):a.createElement("span",{class:"project-header-disabled"},r.project)):a.createElement("div",{class:"title"},r.role," ",a.createElement("span",{class:"organization",onClick:()=>{window.open(r.link)}},"@",r.organization)),r.description&&a.createElement(a.Fragment,null,a.createElement("hr",{class:"role-divider"}),a.createElement("div",{class:"description"},r.description)),a.createElement("div",{class:"space"})),o=a.createElement("div",{class:"date-info"},r.startDate," - ",null!==(t=r.endDate)&&void 0!==t?t:"present");return a.createElement("div",{class:"timeline"},a.createElement("div",{class:"timeline-left"},r.project?o:n),a.createElement("div",{class:"timeline-divider"},a.createElement("div",{class:"line-left"}),a.createElement("div",{class:"line-right"})),a.createElement("div",{class:"timeline-right"},r.project?n:o))},l=r(3750);const i=[{role:"Mechanical Engineer",organization:"Axoft",startDate:"may 2023",link:"https://axoft.us/"},{project:"CPR Robot",startDate:"april 2023",description:"programmed a 60 OF robotic arm to perfrom CPR autonomously"},{project:"Internal Combustion Engine",startDate:"jan 2023",link:"internal-combustion-engine"},{role:"Research Assistant",organization:"MIT Sea Grant Lab",startDate:"sep 2021",endDate:"sep 2022",link:"https://seagrant.mit.edu/"},{role:"Robotics Intern",organization:"Macco Robotics",startDate:"jun 2022",endDate:"sep 2022",link:"https://www.maccorobotics.com/en"},{project:"5 DOF Robotic Arm",startDate:"aug 2022",link:"robotic-arm"},{project:"Oyster Flipping Robot",startDate:"sep 2021",endDate:"march 2022",link:"oyster-flipping-robot"},{project:"Arcturus Drone",startDate:"sep 2021",endDate:"march 2022",link:"arcturus-drone"},{role:"Research Assistant",organization:"MIT CSAIL",startDate:"jun 2021",endDate:"sep 2021",link:"https://www.csail.mit.edu/"},{project:"Electric Go Cart",startDate:"jan 2021",link:"electric-go-kart"}];var c=()=>a.createElement(n.Z,null,a.createElement("div",{class:"about-container"},a.createElement("div",{class:"summary-container"},a.createElement("div",{class:"about-left"},a.createElement("h2",null,"ENGINEER."),a.createElement("h2",null,"DESIGNER."),a.createElement("h2",null,"MAKER.")),a.createElement("div",{class:"about-right"},"My name is Ita Futran and I am a mechanical engineering student at MIT. Over the course of my education I have found a passion for the intersection of biology and robotics. I appreciate topics such as mobility, bio-inspired robots, biomimicry, and human interacting robotics. I love how versatile humans can be and hope to create modular robots with programmable capabilities.",a.createElement("br",null),a.createElement("br",null),"My studies have been primarily centered about mechanical engineering, but I strongly believe that in order to build something great, you have to have a basic understanding of all the parts. To do so, I have further expanded my studies on electrical engineering, programming, and biomechanics. I am excited to learn more and create robots for people. Please reach out to me at icfutran@mit.edu to chat about any thoughts on technology, research, or job opportunities.")),a.createElement("a",{id:"link",href:"#timeline"},a.createElement(l.F0C,{class:"carrot"})),a.createElement("div",{id:"timeline"},i.map(((e,t)=>a.createElement(o,{props:i[t]}))))))},4405:function(e,t,r){r.d(t,{w_:function(){return s}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(n),l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function c(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return a.createElement(m,l({attr:l({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var r,n=e.attr,o=e.size,c=e.title,s=i(e,["attr","size","title"]),m=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==o?a.createElement(o.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-pages-about-js-793e9f823cff939128e6.js.map