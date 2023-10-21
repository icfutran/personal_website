import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const TankInspiredRobot = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[2];
  return (
    <ProjectLayout projectTitle="Tank Inspired Robot">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description only-text">
          <div>
            This robot was built based off of a prompt to navigate a ‘mars
            terrain’. I decided to create a tank for two reasons, the first
            being that I wanted the robot to be able to comfortably navigate
            bumpy terrain, the second being that I wanted to build a tank.
          </div>
        </div>
      </div>
      <div class="new-stack">
        <div class="project-description text-right only-text">
          <div>
            <div class="mini-title">BODY</div>
            The body is designed to keep the center of mass low to the ground
            and to safely contain the electronics. The metal body is made of
            plasma-cut sheet metal bent into shape with a breaker. The wheels
            were supplied that matched the DC motors provided.
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
        <div class="project-description only-text">
          <div>
            <div class="mini-title">ELECTRONICS</div>
            The electronics supplied were: 12V DC motor, laser encoders, small
            laser distance sensor, and an arduino with a motor shield. Two
            battery packs were used to separately power the DC motors and
            arduino.
          </div>
        </div>
      </div>
      <div class="new-stack longaf">
        <div class="project-description text-right only-text">
          <div>
            <div class="mini-title">TANK TREADS</div>
            The most exciting part of this project! Through this project I
            learned about the complexities of creating tank treads. First, the
            treads themselves. I decided to go with stiff 3D printed treads,
            connected together with dowels. The stiff treads reduced the spring
            coefficient when interacting with the ground, with the goal of
            allowing my tank to move easily with the given DC motors which had a
            very low output torque.
            <br></br>
            <br></br>Tank treads need to be in constant tension to be able to
            navigate uneven terrain. Because the treads are stiff, the tension
            was applied to the belays holding the treads in place. There is one
            spoked wheel on each side to move the treads, with four accompanying
            belays to keep them in place. The belays were tensioned on the
            inside of the tank with rubber bands.
          </div>
        </div>
        <video muted controls class="project-media">
          <source src={project["video"]["src"]} type="video/mp4" />
        </video>
        {/* <div class="project-description only-text">
          <div>
            Tank treads need to be in constant tension to be able to navigate
            uneven terrain. Because the treads are stiff, the tension was
            applied to the belays holding the treads in place. There is one
            spoked wheel on each side to move the treads, with four accompanying
            belays to keep them in place. The belays were tensioned on the
            inside of the tank with rubber bands.
          </div>
        </div> */}
      </div>
      {/* <div class="new-stack">
        <div class="project-description only-text">
          <div>
            Tank treads need to be in constant tension to be able to navigate
            uneven terrain. Because the treads are stiff, the tension was
            applied to the belays holding the treads in place. There is one
            spoked wheel on each side to move the treads, with four accompanying
            belays to keep them in place. The belays were tensioned on the
            inside of the tank with rubber bands.
          </div>
        </div>
      </div> */}
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

export default TankInspiredRobot;
