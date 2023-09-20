import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
import surgical_robot from "../images/projects/surgical-robot/cover-photo.jpeg";
import combustion_engine from "../images/projects/internal-combustion-engine/cover-photo.png";
import tank_robot from "../images/projects/tank-inspired-robot/cover-photo.png";
import coffee_dispenser from "../images/projects/nestle-coffee-dispenser/cover-photo.jpeg";
import humanoid_arm from "../images/projects/humanoid-arm/cover-photo.webp";
import electric_go_kart from "../images/projects/electric-go-kart/cover-photo.webp";
import arcturus_drone from "../images/projects/arcturus-drone/cover-photo.png";
import arcturus_boat from "../images/projects/arcturus-boat/cover-photo.jpg";
import drone_wrapper from "../images/projects/dji-drone-wrapper/cover-photo.jpeg";
import "./projects.css";

const FILTERS = ["all", "work", "research", "personal"];

const PROJECTS = [
  {
    title: "Surgical Robot",
    category: "work",
    path: "/projects/surgical-robot",
    cover: surgical_robot,
  },
  {
    title: "Internal Combustion Engine",
    category: "personal",
    path: "/projects/internal-combustion-engine",
    cover: combustion_engine,
  },
  {
    title: "Humanoid Arm",
    category: "work",
    path: "/projects/humanoid-arm",
    cover: humanoid_arm,
  },
  {
    title: "Tank-Inspired Robot",
    category: "personal",
    path: "/projects/tank-inspired-robot",
    cover: tank_robot,
  },
  {
    title: "Nestle Coffee Dispenser",
    category: "work",
    path: "/projects/nestle-coffee-dispenser",
    cover: coffee_dispenser,
  },
  {
    title: "DJI Drone Wrapper",
    category: "research",
    path: "/projects/dji-drone-wrapper",
    cover: drone_wrapper,
  },
  {
    title: "Electric Go Kart",
    category: "personal",
    path: "/projects/electric-go-kart",
    cover: electric_go_kart,
  },
  {
    title: "Arcturus Drone",
    category: "personal",
    path: "/projects/arcturus-drone",
    cover: arcturus_drone,
  },
  {
    title: "Arcturus Boat",
    category: "personal",
    path: "/projects/arcturus-boat",
    cover: arcturus_boat,
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
                <Link to={project["path"]}>
                  <img
                    src={project["cover"]}
                    alt={project["title"]}
                    class="project-image"
                  />
                  <div class="img_description">
                    <div class="image-title">{project["title"]}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
