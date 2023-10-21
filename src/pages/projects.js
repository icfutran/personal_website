import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
import ProjectContext from "../store.js";
import PROJECTS from "../components/project_list.js";
import "./projects.css";

const FILTERS = ["all", "work", "research", "personal"];

const ProjectsPage = () => {
  const { filter, setFilter } = React.useContext(ProjectContext);
  const [showFullScreen, setShowFullScreen] = React.useState("");

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
            filter !== "all"
              ? project["category"] === filter
              : project["category"] !== "design"
          ).map((project, index) => {
            return (
              <div class={"image-container " + project["cover"]["orientation"]}>
                <Link to={project["path"]}>
                  {project["cover"]["fitting"] ? (
                    <img
                      src={project["cover"]["src"]}
                      alt={project["title"]}
                      class={project["cover"]["fitting"]}
                    />
                  ) : (
                    <img
                      src={project["cover"]["src"]}
                      alt={project["title"]}
                      class="project-image"
                    />
                  )}
                  <div class="img_description">
                    <div class="image-title">{project["title"]}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {showFullScreen !== "" && (
        <div class="fullscreen-overlay" onClick={() => setShowFullScreen("")}>
          <div
            class={
              "fullscreen-image " +
              PROJECTS[showFullScreen]["cover"]["orientation"] +
              "-fullscreen"
            }
          >
            <img src={PROJECTS[showFullScreen]["cover"]["src"]} alt="" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectsPage;
