import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const MITRoboticsComp = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[8];
  return (
    <ProjectLayout projectTitle="MIT Robotics Competition">
      <div class="new-stack longgaf">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media smaller-img"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            The MIT robotics competition! Every year MIT hosts a robotics
            competition for 2nd year mechanical engineering students. You are
            given a board with lots of tasks to complete and you try to do as
            many as you can in the time allotted. During my year I made a
            simple, but consistent robot. It could lift a heavy weight to 3x its
            height, pull on a ring, and press buttons at various levels. This
            robot, named bot, scored in the top 20 robots in the class!
          </div>
        </div>
      </div>
      <div class="new-stack longaf">
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo2")}
        />
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media img-but-smaller"
          onClick={() => setShowFullScreen("photo1")}
        />
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

export default MITRoboticsComp;
