import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const RoboticArm = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[1];
  return (
    <ProjectLayout projectTitle="5 DOF Robotic Arm">
      <div class="new-stack">
        <div class="project-description keywords">
          <div>
            While working at Macco Robotics in Spain, I was asked to design a 5
            DOF robotic arm for their humanoid bartender robot, Kime. The arms
            they were using at the time were outsourced, and did not move in a
            ‘natural’ way.
            <br></br>
            <br></br>I created a CAD model for them that used 5 hub motors. By
            arranging their positions with respect to the body, I was able to
            achieve natural-looking motion. These motors were modeled off of
            online sellers, and their respective torques were up to the task of
            carrying each other and a full handle of alcohol. These arms did not
            need extremely high precision as there is a large margin of error
            available while still performing the task. Therefore the motors
            would be able to function only using a rotary encoded paired with
            either a small 6:1 ratio gearbox or no gearbox.
          </div>
        </div>
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media vertical-img"
          onClick={() => setShowFullScreen("cover")}
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

export default RoboticArm;
