import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const PersonalDesk = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[9];
  return (
    <ProjectLayout projectTitle="Personal Desk">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            This is a small personal bed desk I made for myself. I noticed when
            I wanted to watch tv in my dorm bed I encountered two problems: my
            laptop would overheat and I had to be very careful not to spill my
            drink. In order to keep my laptop from overheating I needed to
            purchase a bed desk. These were available to purchase online, but
            would not solve my drink issue. As a result, I decided to design and
            create my own desk.
          </div>
        </div>
      </div>
      <div class="new-stack longer">
        <div class="project-description text-right">
          <div>
            I used 2’x2’ wood sheets that were available as scrap in my favorite
            makerspace. First I designed a desk that had many slits in it to
            help dissipate the heat from my computer. Due to the limited size of
            my wood sheets, I created a finger joint to combine the two sides of
            my desk, and reinforced it with scrap wood found in the lab.
          </div>
        </div>
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo1")}
        />
      </div>
      <div class="new-stack longaf">
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo2")}
        />
        <div class="project-description">
          <div>
            To keep my drink from spilling, I implemented a gimbal for the drink
            holder. This was only one degree of freedom, but I found that it
            provided enough flexibility for the cup that the drink wouldn't
            spill. To create the gimbal, I drilled two holes in the sides of the
            wood. The cup holder itself was a press-fit, while the desk had a
            loose fit. I assembled the gimbal before securing the desk, keeping
            it in place with freedom to rotate. The final product solved all my
            issues and I was able to comfortably have a drink while watching tv
            in bed!
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

export default PersonalDesk;
