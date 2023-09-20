import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import coverPhoto from "../../images/projects/tank-inspired-robot/cover-photo.png";
import image1 from "../../images/projects/tank-inspired-robot/image1.png";
import image2 from "../../images/projects/tank-inspired-robot/image2.png";
import video1 from "../../images/projects/tank-inspired-robot/video.mp4";
import "../../components/project_layout.css";

const MEDIAS = {
  coverPhoto: coverPhoto,
  image1: image1,
  image2: image2,
  video1: video1,
};

const TankInspiredRobot = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  return (
    <ProjectLayout projectTitle="Tank Inspired Robot">
      <div class="new-stack">
        <img
          src={coverPhoto}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("coverPhoto")}
        />
        <img
          src={image1}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("image1")}
        />
        <div class="project-description">
          description description description description description
          description description description description description
          description description description description description
          description description description description description
          description description description description description
          description description description description description
          description description description
        </div>
      </div>
      <div class="new-stack">
        <img
          src={image2}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("image2")}
        />
        <video controls class="project-media">
          <source src={video1} type="video/mp4" />
        </video>
        <div class="project-description">
          description description description description description
          description description description description description
          description description description description description
          description description description description description
          description description description description description
          description description description description description
          description description description
        </div>
      </div>
      {showFullScreen !== "" && (
        <div class="fullscreen-overlay" onClick={() => setShowFullScreen("")}>
          <div class="fullscreen-image">
            <img src={MEDIAS[showFullScreen]} alt="" />
          </div>
        </div>
      )}
    </ProjectLayout>
  );
};

export default TankInspiredRobot;
