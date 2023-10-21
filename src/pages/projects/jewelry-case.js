import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const JewelryCase = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[6];
  return (
    <ProjectLayout projectTitle="Jewelry Case">
      <div class="new-stack longaf">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media smaller-img"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          During my Junior year in college, I noticed I stopped wearing as much
          jewelry. I enjoyed wearing my pieces, but in the morning I simply
          would not see my small jewelry box, and did not have time to sift
          through the mess. To solve this issue, I wanted to keep my jewelry
          organized on a display. Unfortunately, living in a dorm meant I did
          not want my jewelry to be displayed in plain view, but rather on the
          inside of my closet door. A quick amazon search told me I would not
          find this online.<br></br>
          <br></br>I took measurements of my closet door to make a jewelry
          display case that would hang from the door. Bringing these
          measurements to my favorite makerspace, I gathered all the aluminum
          scrap metal I could find. Since I did not have a large sheet at my
          disposal, I designed the display to be made of many small rectangles
          that could be scavenged from sheet metal, and connected with pop
          rivets to maintain a clean look.
        </div>
      </div>
      <div class="new-stack">
        <div class="project-description text-right">
          The design included holes for dangling earrings, separate rows of
          hooks for bracelets and necklaces, and finally a felt-lined wooden box
          at the bottom to hold rings and stud earrings. The hooks were made
          with a plasma-cut metal cutter and then bent with a metal breaker. The
          display was a success! My jewelry is safely hidden but easily accessed
          by myself.
        </div>
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

export default JewelryCase;
