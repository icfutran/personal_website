import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const ShoelaceTightener = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[5];
  console.log(project);
  return (
    <ProjectLayout projectTitle="Shoelace Tightener">
      <div class="new-stack longer">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            This is the project that won my group the Innovation Award in
            MakeMIT 2021. We were given a large selection of microprocessors,
            motors, and sensors to choose from and were tasked with making
            anything in the span of 24 hours.
          </div>
        </div>
      </div>
      <div class="new-stack long">
        <div class="project-description text-right">
          <div>
            My team decided on an automatic shoelace tightener. This was
            designed for the disabled community who do not have either the
            strength or mobility in their hands to tie shoelaces. Instead of
            creating special shoes, we wanted to create a tool that would allow
            them to wear any shoes they want, and give them more independence in
            day to day tasks. This remote controlled device used a small DC
            motor to wind shoelaces. At this event my team won the Innovation
            Award and went on to receive $500 of funding to create more advanced
            prototypes. The current design uses a small windup that can be
            placed on any shoe, with a portable motor powered device that can
            tighten the laces.
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

export default ShoelaceTightener;
