import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const InternalCombustionEngine = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[0];
  console.log(project);
  return (
    <ProjectLayout projectTitle="Internal Combustion Engine">
      <div class="new-stack longer">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            The internal combustion was made in an informal class that offered
            mentorship while machining. This is a single-piston combustion
            engine. It was machined on manual mills and lathes with the
            prototrack feature. The CAM was completed on fusion. I was
            responsible for the entire process of going from CAM to fully
            machined engine. After uploading the CAM to the mill, I created a
            tool table, calibrated every tool to the proper height, and centered
            the machine to my part. It was finished over the course of four
            weeks, working in the machine shop six hours a day.
          </div>
        </div>
      </div>
      <div class="new-stack long">
        <div class="project-description text-right">
          <div>
            Without a grinder available for use, I had to make the piston three
            times, since its necessary resolution was smaller than the
            resolution offered by a prototrack lathe. The final product was able
            to run at 5000 rpm. This was an incredible experience, not only
            because I am more comfortable in the machine shop, but I am better
            prepared to design for manufacturing.
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

export default InternalCombustionEngine;
