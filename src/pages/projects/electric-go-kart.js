import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const ElectricGoCart = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[3];
  return (
    <ProjectLayout projectTitle="Electric Go Cart">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media smaller-img"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            At the end of the Covid-semester, a friend and I decided we needed a
            project to bring some life to our studies. As an electric engineer
            and mechanical engineer, we came together to create an electric
            go-kart (spongebob inspired). In the spongebob show, the characters
            drive around the streets in boats, and we wanted our own. The plan
            was to build our own boat, and add electric hub motors to the back
            two wheels, and a castor wheel on the front.
          </div>
        </div>
      </div>
      <div class="new-stack longer">
        <div class="project-description text-right">
          <div>
            A big thanks to our landlords at the time who were MIT alumni and
            let us take over the entire basement for the project as well as use
            any power tools in the vicinity. The electric wheels were taken from
            a broken hoverboard someone was selling online. This board, like
            most broken electric vehicles, only had battery issues. This allowed
            us to reconfigure the hub motors for ourselves. We bought an
            all-purpose motor controller online. With this along with 36V of
            acid batteries, we were able to power the motors for hour-long
            drives.
          </div>
        </div>
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo1")}
        />
      </div>
      <div class="new-stack">
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("photo2")}
        />
        <div class="project-description">
          <div>
            We even gave ourselves directional control! By assembling eight
            light switches that could be flipped simultaneously, we flipped the
            directions of the wires. The boat itself was made from large plywood
            sheets. Most of the time was devoted to cutting, nailing, screwing,
            and painting the wood. At the end of the week, we came away with an
            electric go-kart with directional control that we used to drive
            around the streets!
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

export default ElectricGoCart;
