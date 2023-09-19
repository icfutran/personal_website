import * as React from "react";
import Layout from "../components/layout.js";
import surgical_robot from "../projects/surgical-robot/cover-photo.jpeg";
import combustion_engine from "../projects/internal-combustion-engine/cover-photo.jpeg";
import tank_robot from "../projects/tank-inspired-robot/cover-photo.jpeg";
import coffee_dispenser from "../projects/nestle-coffee-dispenser/cover-photo.jpeg";
import humanoid_arm from "../projects/humanoid-arm/cover-photo.webp";
import drone_wrapper from "../projects/dji-drone-wrapper/cover-photo.jpeg";
import "./projects.css";

const FILTERS = ["all", "work", "research", "personal"];

const PROJECTS = [
  {
    title: "Surgical Robot",
    category: "work",
    path: "../projects/surgical-robot",
    cover: surgical_robot,
  },
  {
    title: "Internal Combustion Engine",
    category: "personal",
    path: "../projects/internal-combustion-engine",
    cover: combustion_engine,
  },
  {
    title: "Humanoid Arm",
    category: "work",
    path: "../projects/humanoid-arm",
    cover: humanoid_arm,
  },
  {
    title: "Tank-Inspired Robot",
    category: "personal",
    path: "../projects/tank-inspired-robot",
    cover: tank_robot,
  },
  {
    title: "Nestle Coffee Dispenser",
    category: "work",
    path: "../projects/nestle-coffee-dispenser",
    cover: coffee_dispenser,
  },
  {
    title: "DJI Drone Wrapper",
    category: "research",
    path: "../projects/dji-drone-wrapper",
    cover: drone_wrapper,
  },
];

const ProjectsPage = () => {
  const [filter, setFilter] = React.useState("all");

  return (
    <Layout>
      <div class="projects-container">
        <div class="title-container">
          <h2 class="title-left">PROJECTS</h2>
          <div class="title-right">
            {FILTERS.map((f, index) => {
              return (
                <button
                  class={filter === f ? "filter-item" : "filter-option"}
                  onClick={() => {
                    setFilter(f);
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
        <div class="project-gallery">
          {PROJECTS.filter((project) =>
            filter !== "all" ? project["category"] === filter : project
          ).map((project, index) => {
            return (
              <div class="image-container">
                <img
                  src={project["cover"]}
                  alt={project["title"]}
                  class="project-image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
