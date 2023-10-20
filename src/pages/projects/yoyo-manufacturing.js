import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const YoyoManufacturing = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[7];
  return (
    <ProjectLayout projectTitle="Yo-yo Manufacturing">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            In my Junior year at MIT I took a manufacturing class to better
            understand how to design for mass manufacturing. Part of this class
            is working with a group of students to produce over 50 yo-yos. We
            designed the toys in Fusion 360, deciding on a design that looks
            like a snow globe. These yo-yos fit together with a press-fit, no
            glue allowed. The press fit pieces were made from injection molded
            parts. We also had two other thermoformed parts in this yo-yo.
          </div>
        </div>
      </div>
      <div class="new-stack longer">
        <div class="project-description text-right">
          <div>
            Over the course of the semester we designed the yoyo, created CAD
            models for the individual pieces, created CAD models of their
            respective molds, and used CAM and CNC machines to make aluminum
            molds for the injection mold machine.
          </div>
        </div>
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media smaller-img"
          onClick={() => setShowFullScreen("photo1")}
        />
      </div>
      <div class="new-stack">
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            We were responsible for every part of the manufacturing process.
            After manufacturing the molds, we used an industrial injection mold
            machine to mass produce parts. We became familiar with the different
            parameters and settings in the machine that can affect your parts.
            At the end, we had over 100 yo-yos assembled and ready for
            distribution.
          </div>
        </div>
      </div>
      {showFullScreen !== "" && (
        <div class="fullscreen-overlay" onClick={() => setShowFullScreen("")}>
          <div
            class={
              "fullscreen-image " +
              project[showFullScreen]["orientation"] +
              "-fullscreen"
            }
          >
            <img src={project[showFullScreen]["src"]} alt="" />
          </div>
        </div>
      )}
    </ProjectLayout>
  );
};

export default YoyoManufacturing;
