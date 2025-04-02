import * as React from "react";
import Layout from "../components/layout.js";
import TimelineItem from "../components/timeline.js";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./about.css";

const EXPERIENCES = [
  {
    role: "Mechanical Engineer",
    organization: "Axoft",
    startDate: "may 2023",
    link: "https://axoft.us/",
  },
  {
    project: "CPR Robot",
    startDate: "april 2023",
    description: "programmed a 6 DOF robotic arm to perform CPR autonomously",
  },
  {
    project: "Internal Combustion Engine",
    startDate: "jan 2023",
    link: "internal-combustion-engine",
  },
  {
    role: "Research Assistant",
    organization: "MIT Sea Grant Lab",
    startDate: "sep 2021",
    endDate: "sep 2022",
    link: "https://seagrant.mit.edu/",
  },
  {
    role: "Robotics Intern",
    organization: "Macco Robotics",
    startDate: "jun 2022",
    endDate: "sep 2022",
    link: "https://www.maccorobotics.com/en",
  },
  {
    project: "5 DOF Robotic Arm",
    startDate: "aug 2022",
    link: "robotic-arm",
  },
  {
    project: "Oyster Flipping Robot",
    startDate: "sep 2021",
    endDate: "march 2022",
    link: "oyster-flipping-robot",
  },
  {
    project: "Arcturus Drone",
    startDate: "sep 2021",
    endDate: "march 2022",
    link: "arcturus-drone",
  },
  {
    role: "Research Assistant",
    organization: "MIT CSAIL",
    startDate: "jun 2021",
    endDate: "sep 2021",
    link: "https://www.csail.mit.edu/",
  },
  {
    project: "Electric Go Cart",
    startDate: "jan 2021",
    link: "electric-go-kart",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <div class="about-container">
        <div class="summary-container">
          <div class="about-left">
            <h2>ENGINEER.</h2>
            <h2>DESIGNER.</h2>
            <h2>MAKER.</h2>
          </div>
          <div class="about-right">
            My name is Ita Futran and I recently graduated from MIT. Over the 
            course of my education I have found a passion for robotics and the 
            intersection of mechanical engineering with embedded systems. I appreciate 
            topics such as human interacting robotics, bio-inspired robots, and mobility. 
            I love how versatile humans can be and hope to create machines to accentuate 
            and improve our innate capabilities. 
            <br></br>
            <br></br>
            My studies have been primarily centered about mechanical
            engineering, but I strongly believe that in order to build something
            great, you have to have a basic understanding of all the parts. To
            do so, I have further expanded my studies on electrical engineering,
            programming, and biomechanics. I am excited to learn more and create
            great things for people. Please reach out to me at ita.futran@gmail.com to
            chat about any thoughts on technology, research, or job
            opportunities.
          </div>
        </div>
        <a id="link" href="#timeline">
          <BsFillCaretDownFill class="carrot" />
        </a>
        <div id="timeline">
          {EXPERIENCES.map((experience, index) => {
            return <TimelineItem props={EXPERIENCES[index]} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
