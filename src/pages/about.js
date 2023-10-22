import * as React from "react";
import Layout from "../components/layout.js";
import TimelineItem from "../components/timeline.js";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./about.css";

const EXPERIENCES = [
  {
    role: "Robotics Intern",
    organization: "Axoft",
    startDate: "may 2023",
    link: "https://axoft.us/",
  },
  {
    project: "CPR Robot",
    startDate: "april 2023",
    description: "programmed a 60 OF robotic arm to perfrom CPR autonomously",
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
    // link: "internal-combustion-engine",
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
            My name is Ita Futran and I am a mechanical engineering student at
            MIT. I focus my studies on human-interacting robotics, biomechanics,
            and biomimicry.
            <br></br>
            <br></br>
            The most favoritest Rachel ever made me this website so that I can
            get a job and become her sugar mommy. I love her so much I'm a simp
            for her and I'm gonna build an awesome walk-in chicken coop with an
            oversized run, waterproof interior, nesting boxes with egg doors and
            indoor perches because she wants 500+ chickens.
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
