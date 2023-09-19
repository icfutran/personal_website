import * as React from "react";
import Layout from "../components/layout.js";
import "./projects.css";

const FILTERS = ["all", "work", "research", "personal"];

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
