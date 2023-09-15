import * as React from "react";
import Layout from "../components/layout.js";
import TimelineItem from "../components/timeline.js";
import "./about.css";

const EXPERIENCES = [
  {
    role: "Robotics Intern",
    organization: "Axoft",
    description: "description about what you do here",
    date: "may 2023 - present",
  },
  {
    role: "Research Assistant",
    organization: "MIT Sea Grant Lab",
    description: "description about what you do here",
    date: "sep 2021 - present",
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
        {EXPERIENCES.map((experience, index) => {
          return <TimelineItem props={EXPERIENCES[index]} />;
        })}
      </div>
    </Layout>
  );
};

export default AboutPage;
