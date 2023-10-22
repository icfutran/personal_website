import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const ArcturusDrone = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[4];

  return (
    <ProjectLayout projectTitle="Arcturus Drone">
      <div class="new-stack longaf">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            A group of classmates and I founded the MIT autonomous robotics
            team, Arcturus. The year we founded we took the advice of our
            faculty advisor to compete in an autonomous ocean engineering
            competition. We each took the lead of separate subgroups and I chose
            the drone subgroup. The goal was to build a drone that could
            function autonomously and alongside an autonomous boat.
          </div>
        </div>
      </div>
      <div class="new-stack ">
        <div class="project-description text-right">
          <div>
            The drone was also required to land on the boat mid-competition. I
            led a small team of other students in designing and building this
            drone. After designing, manufacturing, and configuring the
            electronics, we used Ardupilot and a px4 to control the software and
            communicate with the boat.
          </div>
        </div>
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media"
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

export default ArcturusDrone;
