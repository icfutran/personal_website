import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const OysterRobot = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[10];
  return (
    <ProjectLayout projectTitle="Oyster Flipping Robot">
      <div class="new-stack longgaf">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media smaller-img"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            During my second year at MIT I did research in the Sea Grant Lab. I
            worked on the mechanics of an oyster flipping robot. The flipping
            mechanism was placed on an autonomously-run boat that could navigate
            rows of oyster farms and flip the cages to reduce ocean related
            buildup. An important aspect of the project was to design the boat
            to work in already existing farms as opposed to creating farms
            around the device.<br></br>
            <br></br>I was in charge of designing the flipping mechanism. This
            included three arms, two powerful arms on the sides to flip it
            almost all the way over, and a third arm on top to ensure the cage
            flipped. This design was especially suited to farms because it
            reduced excessive twisting of the main line that all the cages were
            connected by, increasing the lifespan of the line.
          </div>
        </div>
      </div>
      <div class="new-stack long">
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media make-small"
          onClick={() => setShowFullScreen("photo2")}
        />
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo1")}
        />
        {/* <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo2")}
        /> */}
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

export default OysterRobot;
