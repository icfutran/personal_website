import * as React from "react";
import Layout from "../components/layout.js";
import "./projects.css";

const FILTERS = ["all", "work", "research", "personal"];

const PROJECTS = [
  { title: "Surgical Robot", category: "work", path: null },
  { title: "Internal Combustion Engine", category: "personal", path: null },
  { title: "Humanoid Arm", category: "work", path: null },
  { title: "Tank-Inspired Robot", category: "personal", path: null },
  { title: "Nestle Coffee Dispenser", category: "work", path: null },
  { title: "DJI Drone Wrapper", category: "research", path: null },
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
      </div>
    </Layout>
  );
};

export default ProjectsPage;
